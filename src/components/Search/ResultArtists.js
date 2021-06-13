import React from 'react';
import {Grid, Header, Image} from "semantic-ui-react";

import defaultAvatarUrl from '../../assets/avatar.svg';
import SpotifyApiUtil from "../../util/SpotifyApiUtil";

class ResultArtists extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgList: Array(6).fill(defaultAvatarUrl)
    }
  }

  componentWillReceiveProps(nextProps) {
    let data = nextProps.data;
    if (data !== null) {
      // Get album covers from Spotify.
      let artistsIdList = data.map(a => a['id']);
      SpotifyApiUtil.getAvatarListByArtistId(artistsIdList).then((imgUrlList) => {
        this.setState({
          imgList: imgUrlList
        })
      }).catch((error) => {
        // TODO Show error.
        console.log('Error in getAvatarListByArtistId: ' + error);
      });
    }
  }

  render() {
    if (this.props.data !== null) {

      // Return a grid of artists if data exists.
      return (
        <Grid stackable columns={6}>
          {this.props.data.map((item, index) => (
            <Grid.Column key={index}>
              <Grid centered>
                <Grid.Row>
                  <Image src={this.state.imgList[index]}
                         alt='Avatar' size='tiny'
                         circular
                  />
                </Grid.Row>
                <Grid.Row>
                  <Header as='h4'>
                    <Header.Content as='a' href={'../searchArtists?id=' + item['id'] + '&q=' + this.props.query}>
                      {item['name']}
                      <Header.Subheader>
                        Artist
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          ))}
        </Grid>
      );

    } else if (this.props.loading === true) {

      // Return a loading column if parent's turned out to be loading.
      return (
        <Grid stackable columns={6}>
          {this.state.imgList.map((item, index) => (
            <Grid.Column key={index}>
              <Grid centered>
                <Grid.Row>
                  <Image src={this.state.imgList[index]}
                         alt='Avatar' size='tiny'
                         circular
                  />
                </Grid.Row>
                <Grid.Row>
                  <Header as='h4'>
                    <Header.Content>
                      Loading...
                      <Header.Subheader>
                        Artist
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          ))}
        </Grid>
      );

    } else {

      // Return 'NO RESULT' if data === null and parent is not loading.
      return (
        <Grid stackable columns={6}>
          <Grid.Column>
            <Grid centered>
              <Grid.Row>
                <Image src={defaultAvatarUrl}
                       alt='Avatar' size='tiny'
                       circular
                />
              </Grid.Row>
              <Grid.Row>
                <Header as='h4'>
                  <Header.Content>
                    No Result
                    <Header.Subheader>
                      Artist
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      );

    }
  }

}

export default ResultArtists;
