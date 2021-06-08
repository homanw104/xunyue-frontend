import React from 'react'
import defaultAlbumArtUrl from '../assets/album.svg'
import { Header, Image, Table } from 'semantic-ui-react'
import BackendApiUtil from '../util/BackendApiUtil'
import StringUtil from '../util/StringUtil'

class DuplicateSongs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      img: defaultAlbumArtUrl,
      trackName: 'Unknown Track',
      artistName: 'Artist',
      duration: '0 min 0 sec',
      releaseDate: 'Unknown',
      popularity: 0
    }
  }

  componentDidMount() {
    // Get track info from backend.
    BackendApiUtil.getSearchData(this.state.trackName).then((response) => {
      console.log(response);
      if (this.getState.type()==="tracks"){
      this.setState({
        trackName: response.data['data']['top']['data']['name'],
        artistName:response.data['data']['top']['data']['artists'],
        explicit: response.data['data']['explicit'],
        duration: StringUtil.msToString(response.data['data']['top']['data']['duration_ms']),
        releaseDate: response.data['data']['top']['data']['release_date'],
        popularity: response.data['data']['top']['data']['popularity']
      })
      }
    }).catch((error) => {
      console.log(error);
    })
  }


  render () {
    return (
      <Table basic='very' celled collapsing>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  {this.state.trackName}
                  <Header.Subheader>
                    {this.state.artistName}
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    )
  }
}

export default DuplicateSongs
