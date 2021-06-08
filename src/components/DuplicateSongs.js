import React from 'react'
import defaultAlbumArtUrl from '../assets/logo.svg'
import { Header, Image, Table } from 'semantic-ui-react'

class DuplicateSongs extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      img: defaultAlbumArtUrl
    }
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
