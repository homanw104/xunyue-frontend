import React from 'react';
import {Button, Card, Container, Image} from 'semantic-ui-react';

import StringUtil from "../../util/StringUtil";
import SpotifyApiUtil from "../../util/SpotifyApiUtil";
import BackendApiUtil from "../../util/BackendApiUtil";
import defaultAlbumArtUrl from '../../assets/album.svg';

class TrackInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: defaultAlbumArtUrl,
      trackId: this.props.trackId,
      trackName: 'Unknown Track',
      artistId: null,
      artistName: 'Artist',
      explicit: 0,
      duration: '0 min 0 sec',
      releaseDate: 'Unknown',
      popularity: 0
    }
  }

  componentDidMount() {
    // Get track info from backend.
    BackendApiUtil.getTracksData(this.state.trackId).then((response) => {
      this.setState({
        trackName: response.data['data']['name'],
        artistId: (response.data['data']['id_artists']).slice(2, -2).split('\', \'').join(', '),
        artistName: (response.data['data']['artists']).slice(2, -2).split('\', \'').join(', '),
        explicit: response.data['data']['explicit'],
        duration: StringUtil.msToString(response.data['data']['duration_ms']),
        releaseDate: response.data['data']['release_date'],
        popularity: response.data['data']['popularity']
      })
    }).catch((error) => {
      // TODO Show error.
      console.log(error);
    })

    // Get album art from spotify.
    SpotifyApiUtil.getAlbumArtByTrackId(this.state.trackId).then((imgUrl) => {
      this.setState({
        img: imgUrl
      })
    }).catch((error) => {
      // TODO Show error.
      console.log(error);
    });
  }

  handleOnClick = () => {
    window.location.href = '../editTrack?id=' + this.state.trackId;
  }

  render() {
    return (
      <Container>
        <Card fluid>
          <Image src={this.state.img} wrapped ui={false}/>
          <Card.Content>
            <Card.Header>
              {this.state.trackName + ' '}
              <Button circular compact size='tiny' icon='edit'
                      style={{backgroundColor: '#ffffffff'}}
                      onClick={this.handleOnClick}
              />
            </Card.Header>
            <Card.Description>
              {this.state.releaseDate} ∙ {this.state.duration}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={'/searchArtists?id=' + this.state.artistId + '&q=' + this.props.query}>
              {this.state.artistName}
            </a>
          </Card.Content>
        </Card>
      </Container>
    )
  }

}

export default TrackInfo;
