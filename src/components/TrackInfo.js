import React from 'react';
import axios from "axios";
import defaultAlbumArtUrl from '../assets/logo.svg'
import SpotifyApiUtil from "../util/SpotifyApiUtil";
import { backendUrl } from '../config/config'
import { Card, Icon, Image } from 'semantic-ui-react'

class TrackInfo extends React.Component {

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
        duration: this.msToString(response.data['data']['duration_ms']),
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
    });

  }

  render() {
    return(
        <Card>
          <Image src={this.state.img} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.state.trackName}</Card.Header>
            <Card.Description>
              {this.state.releaseDate} ∙ {this.state.duration}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              {this.state.artistName}
            </a>
          </Card.Content>
        </Card>
    )
  }

  /**
   * Convert millisecond to formatted string.
   * @param ms integer in milliseconds
   * @return {string} formatted string.
   */
  msToString(ms) {
    let hours = Math.round(ms / (1000 * 60 * 60));
    let minutes = Math.round((ms % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.round((ms % (1000 * 60)) / 1000);
    return ((hours === 0) ? ('') : (hours.toString() + ' hr '))
      + ((minutes === 0) ? ('') : (minutes.toString() + ' min '))
      + (seconds.toString() + ' sec');
  }
}

export default TrackInfo;
