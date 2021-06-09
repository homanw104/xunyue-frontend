import React from 'react'
import { Grid, Header, Image, Table } from 'semantic-ui-react'

import defaultAlbumArtUrl from '../../assets/album.svg'
import StringUtil from "../../util/StringUtil";
import SpotifyApiUtil from "../../util/SpotifyApiUtil";

class ResultSongs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgList: Array(6).fill(defaultAlbumArtUrl)
    }
  }

  componentWillReceiveProps(nextProps) {
    let data = nextProps.data;
    if (data !== null) {
      // Get album covers from Spotify.
      let tracksIdList = data.map(a => a['id']);
      SpotifyApiUtil.getAlbumArtListByArtistId(tracksIdList).then((imgUrlList) => {
        this.setState({
          imgList: imgUrlList
        })
      }).catch((error) => {
        console.log('Error in getAlbumArtListByArtistId: ' + error);
      });
    }
  }

  render() {
    if (this.props.data !== null) {

      // Return a grid of result if data exists.
      return(
        <Grid doubling columns={2}>
          {this.props.data.map((item, index) => (
            <Grid.Column key={index}>
              <Table basic='very'>
                <Table.Body>
                  <Table.Row verticalAlign='top'>
                    <Table.Cell collapsing>
                      <Image src={this.state.imgList[index]}
                             alt='Album art' size='tiny'
                             rounded
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Header as='h4'>
                        <Header.Content as='a' href={'../searchTracks?id=' + item['id'] + '&q=' + this.props.query}>
                          {item['name']}
                          <Header.Subheader>
                            {StringUtil.artistsToString(item['artists'])}
                          </Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          ))}
        </Grid>
      );

    } else if(this.props.loading === true) {

      // Return a loading column if parent's turned out to be loading.
      return(
        <Grid doubling columns={2}>
          {this.state.imgList.map((item, index) => (
            <Grid.Column key={index}>
              <Table basic='very'>
                <Table.Body>
                  <Table.Row verticalAlign='top'>
                    <Table.Cell collapsing>
                      <Image src={this.state.imgList[index]}
                             alt='Album art' size='tiny'
                             rounded
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Header as='h4'>
                        <Header.Content>
                          Loading...
                          <Header.Subheader>
                            Loading...
                          </Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          ))}
        </Grid>
      );

    } else {

      // Return 'NO RESULT' if data === null and parent is not loading.
      return(
        <Grid.Column>
          <Header as='h4' image>
            <Image src={defaultAlbumArtUrl}
                   alt='Album art' size='tiny'
                   rounded
            />
            <Header.Content>
              No Result
              <Header.Subheader>
                no result
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      );

    }
  }

}

export default ResultSongs;
