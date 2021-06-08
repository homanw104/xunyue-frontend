import React from 'react'
import { Link } from "react-router-dom";
import { Grid, Header, Image, Table } from 'semantic-ui-react'

import defaultAlbumArtUrl from '../assets/album.svg'
import StringUtil from "../util/StringUtil";

class ResultSongs extends React.Component {

  render() {
    if (this.props.data !== null) {
      return(
        <Grid stackable columns={2}>
          {this.props.data.map(item => (
            <Grid.Column>
              <Table basic='very'>
                <Link to={'../trackSearch?id=' + item['id'] + '&q=' + this.props.query}>
                <Table.Row verticalAlign='top'>
                  <Table.Cell collapsing>
                    <Image src={defaultAlbumArtUrl} />
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
                </Link>
              </Table>
            </Grid.Column>
          ))}
        </Grid>
      )
    } else {
      return(
        <Grid.Column>
          <Link to="/trackSearch">
            <Header as='h4' image>
              <Image src={defaultAlbumArtUrl} />
              <Header.Content>
                Loading...
                <Header.Subheader>
                  Loading...
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Link>
        </Grid.Column>
      )
    }
  }
}

export default ResultSongs;
