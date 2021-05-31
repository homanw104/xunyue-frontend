import React from 'react';
import axios from 'axios';

class TrackInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trackName: 'TRACK NAME',
      artistName: 'ARTIST NAME'
    }
  }

  componentDidMount() {
    const request = require('request'); // "Request" library
    const config = require('../config/config'); // Get const variables

    // Get Spotify API token.
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic '
          + (new Buffer(config.clientId + ':'
            + config.clientSecret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    }

    request.post(authOptions, function(error, response, body) {
      console.error('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      if (!error && response.statusCode === 200) {
        // TODO Get album cover.
      } else {
        // TODO Handle error.
      }
    });

    const url = config.backendAPI + '/tracks/tracks?id=' + this.props.trackId;
    axios.get(url)
    .then((response) => {
      console.log(response.data);
      const name = response.data['data'][0]['name'];
      const artists = (response.data['data'][0]['artists']).slice(2, -2).split('\', \'');
      const artistListStr = artists.join(', ');
      console.log(name);
      console.log(artists)
      this.setState({
        trackName: name,
        artistName: artistListStr
      })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    let track = this.state;

    return(
      <div>
        <h2>{track.trackName}</h2>
        <h3>{track.artistName}</h3>
      </div>
    )
  }

}

export default TrackInfo;
