import React from 'react';
import { Card, Container, Image } from 'semantic-ui-react';

import StringUtil from "../util/StringUtil";
import SpotifyApiUtil from "../util/SpotifyApiUtil";
import defaultAlbumArtUrl from '../assets/album.svg';

class ResultTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
      link: '../',
      type: 'artists',
      img: defaultAlbumArtUrl,
      id: null,
      name: 'Loading...',
      desc: 'loading...',
      extra: 'loading...',
      popularity: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    let data = nextProps.data;
    if (data !== null) {
      if (data['type'] === 'artists') {

        // When top result is an artist.
        this.setState({
          link: '../artistSearch?id=' + data['data']['id']
            + '&q=' + this.props.query,                                   /* Href to detail */
          type: 'artists',                                                /* Result type */
          img: defaultAlbumArtUrl,                                        /* Artist avatar */
          id: data['data']['id'],                                         /* Artist ID */
          name: data['data']['name'],                                     /* Artist name */
          desc: StringUtil.followersToString(data['data']['followers']),  /* Followers string */
          extra: StringUtil.genresToString(data['data']['genres']),       /* Genres list */
          popularity: data['data']['popularity']                          /* Artist popularity */
        });
        // Get artist avatar from Spotify.
        SpotifyApiUtil.getAvatarByArtistId(data['data']['id']).then((imgUrl) => {
          this.setState({
            img: imgUrl
          })
        }).catch((error) => {
          console.log('Error in getAvatarByArtistId: ' + error);
        });

      } else {

        // When top result is a track.
        this.setState({
          link: '../trackSearch?id=' + data['data']['id']
            + '&q=' + this.props.query,                                   /* Href to detail */
          type: 'tracks',                                                 /* Result type */
          img: defaultAlbumArtUrl,                                        /* Album cover */
          id: data['data']['id'],                                         /* Track ID */
          name: data['data']['name'],                                     /* Track Name */
          desc: data['data']['release_date'] + ' ∙ '                      /* Release date */
            + StringUtil.msToString(data['data']['duration_ms']),         /* Duration string */
          extra: StringUtil.artistsToString(data['data']['artists']),     /* Artists list */
          popularity: 0
        });
        // Get album art from Spotify.
        SpotifyApiUtil.getAlbumArtByTrackId(data['data']['id']).then((imgUrl) => {
          this.setState({
            img: imgUrl
          })
        }).catch((error) => {
          console.log('Error in getAlbumArtByTrackId: ' + error);
        });

      }
    } else {
      this.setState({
        loading: this.props.loading,
        type: 'artists',
        img: defaultAlbumArtUrl,
        id: null,
        name: 'No result',
        desc: 'no result',
        extra: '/(ToT)/~~',
        popularity: 0
      });
    }
  }

  render() {
    return(
      <Container>
        <Card fluid>
          <Image as='a'
                 src={this.state.img} wrapped
                 ui={false}
                 href={this.state.link}
          />
          <Card.Content>
            <Card.Header as='a' href={this.state.link}>{this.state.name}</Card.Header>
            <Card.Description>
              {this.state.desc}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.state.extra}
          </Card.Content>
        </Card>
      </Container>
    )
  }

}

export default ResultTop;
