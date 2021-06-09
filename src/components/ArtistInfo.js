import React from 'react';
import { Card, Container, Image } from 'semantic-ui-react';

import StringUtil from "../util/StringUtil";
import SpotifyApiUtil from "../util/SpotifyApiUtil";
import BackendApiUtil from "../util/BackendApiUtil";
import defaultAlbumArtUrl from '../assets/logo.svg';

class ArtistInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: defaultAlbumArtUrl,
      artistId: this.props.artistId,
      artistName: 'Artist',
      followers: '0',
      genres: 'Unknown',
      popularity: 0
    }
  }

  componentDidMount() {
    // Get track info from backend.
    BackendApiUtil.getArtistsData(this.state.artistId).then((response) => {
      console.log(response);
      this.setState({
        artistId: (response.data['data']['id']),
        artistName: (response.data['data']['name']),
        followers: StringUtil.followersToString(response.data['data']['followers']),  /* Followers string */
        genres: StringUtil.genresToString(response.data['data']['genres']),       /* Genres list */
        popularity: response.data['data']['popularity']                          /* Artist popularity */
      })
    }).catch((error) => {
      console.log(error);
    })

    // Get album art from spotify.
    SpotifyApiUtil.getAlbumArtListByArtistId(this.state.artistId).then((imgUrl) => {
      this.setState({
        img: imgUrl
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <Container>
        <Card fluid>
          <Image src={this.state.img} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.state.artistName}</Card.Header>
            <Card.Description>
              {this.state.followers} ∙   {this.state.popularity}
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
