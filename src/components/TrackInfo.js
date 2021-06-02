import React from 'react';
import axios from "axios";
import defaultAlbumArtUrl from '../assets/logo.svg'
import SpotifyApiUtil from "../util/SpotifyApiUtil";
import {backendUrl} from '../config/config'

class TrackInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: defaultAlbumArtUrl,
      trackId: this.props.trackId,
      trackName: 'TRACK NAME',
      artistName: 'ARTIST NAME'
    }
  }

  componentDidMount() {
    // Get track info from backend.
    let getTracksOptions = {
      method: 'get',
      url: backendUrl + '/tracks?id=' + this.state.trackId
    }
    axios(getTracksOptions).then((response) => {
      let name = response.data['data']['name'];
      let artists = (response.data['data']['artists']).slice(2, -2).split('\', \'');
      let artistListStr = artists.join(', ');
      this.setState({
        trackName: name,
        artistName: artistListStr
      })
    }).catch((error) => {
      console.log(error)
      this.setState({
        trackName: 'error',
        artistName: 'error'
      })
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
      <div>
        <img src={this.state.img} width='300px' alt='album art' />
        <h2>{this.state.trackName}</h2>
        <h3>{this.state.artistName}</h3>
      </div>
    )
  }

}

export default TrackInfo;
