import React from 'react';
import {Button, Card, Container, Image} from 'semantic-ui-react';

import StringUtil from "../../util/StringUtil";
import SpotifyApiUtil from "../../util/SpotifyApiUtil";
import BackendApiUtil from "../../util/BackendApiUtil";
import defaultAvatarUrl from '../../assets/avatar.svg';

class ArtistInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: defaultAvatarUrl,
      artistId: this.props.artistId,
      artistName: 'Artist',
      followers: 'Followers: loading...',
      genres: 'Unknown',
      popularity: 0
    }
  }

  componentDidMount() {
    // Get track info from backend.
    BackendApiUtil.getArtistsData(this.state.artistId).then((response) => {
      this.setState({
        artistId: (response.data['data']['id']),
        artistName: (response.data['data']['name']),
        followers: StringUtil.followersToString(response.data['data']['followers']),  /* Followers string */
        genres: StringUtil.genresToString(response.data['data']['genres']),           /* Genres list */
        popularity: response.data['data']['popularity']                               /* Artist popularity */
      })
    }).catch((error) => {
      // TODO Show error.
      console.log(error);
    })

    // Get album art from spotify.
    SpotifyApiUtil.getAvatarByArtistId(this.state.artistId).then((imgUrl) => {
      this.setState({
        img: imgUrl
      })
    }).catch((error) => {
      // TODO Show error.
      console.log(error);
    });
  }

  handleOnClick = () => {
    window.location.href = '../editArtist?id=' + this.state.artistId;
  }

  render() {
    return (
      <Container>
        <Card fluid>
          <Image src={this.state.img} wrapped ui={false}/>
          <Card.Content>
            <Card.Header>
              {this.state.artistName}
              <Button circular compact size='tiny' icon='edit'
                      style={{backgroundColor: '#ffffffff'}}
                      onClick={this.handleOnClick}
              />
            </Card.Header>
            <Card.Description>
              {this.state.followers}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            {this.state.genres}
          </Card.Content>
        </Card>
      </Container>
    )
  }

}

export default ArtistInfo;
