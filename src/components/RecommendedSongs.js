import React from 'react'
import { Grid, Header, Image, Table } from 'semantic-ui-react'

import StringUtil from '../util/StringUtil'
import defaultAlbumArtUrl from '../assets/album.svg'

class RecommendedSongs extends React.Component {

  render () {
    if (this.props.data !== null) {
      return (
        <Grid stackable columns={1}>
          {this.props.data.map(item => (
              <Table basic='very'>
                <Table.Row verticalAlign='top'>
                  <Table.Cell collapsing>
                    <Image src={defaultAlbumArtUrl}/>
                    </Table.Cell>
                  <Table.Cell>
                    <Header as='h4'>
                      <Header.Content>
                        {item['name']}
                        <Header.Subheader>
                          {StringUtil.artistsToString(item['artists'])}
                        </Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                </Table.Row>
              </Table>
          ))}
        </Grid>
      )
    } else {
      return (
        <Grid.Column>
            <Header as='h4' image>
              <Image src={defaultAlbumArtUrl}/>
              <Header.Content>
                Loading...
                <Header.Subheader>
                  Loading...
                </Header.Subheader>
              </Header.Content>
            </Header>
        </Grid.Column>
      )
    }
  }
}

export default RecommendedSongs
