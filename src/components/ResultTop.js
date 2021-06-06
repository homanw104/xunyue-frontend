import React from 'react';
import axios from "axios";
import defaultAlbumArtUrl from '../assets/logo.svg'
import StringUtil from "../util/StringUtil";
import SpotifyApiUtil from "../util/SpotifyApiUtil";
import {backendUrl} from '../config/config'
import {Card, Container, Image} from 'semantic-ui-react'

class ResultTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: defaultAlbumArtUrl,
      trackId: this.props.trackId,
      trackName: 'Track',
      artistId: null,
      artistName: 'Artist',
      explicit: 0,
      duration: '0 min 0 sec',
      releaseDate: '2020',
      popularity: 0
    }
  }

  componentDidMount() {
    // Get track info from backend.
    let getTracksOptions = {
      method: 'get',
      url: backendUrl + '/tracks?id=' + this.state.trackId
    }
    axios(getTracksOptions).then((response) => {
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
      console.log(error)
    })

    // Get album art from spotify.
    SpotifyApiUtil.getAlbumArtByTrackId(this.state.trackId).then((imgUrl) => {
      this.setState({
        img: imgUrl
      })
    }).catch((error) => {
      this.setState({
        img: defaultAlbumArtUrl
      })
    });

  }

  render() {
    return(
      <Container>
        <Card fluid>
          <Image src={this.state.img} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.state.trackName}</Card.Header>
            <Card.Description>
              {this.state.releaseDate} ∙ {this.state.duration}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={'/artist/' + this.state.artistId}>
              {this.state.artistName}
            </a>
          </Card.Content>
        </Card>
      </Container>
    )
  }

}

export default ResultTop;
