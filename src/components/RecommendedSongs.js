import React from 'react'
import { Header, Image, List } from 'semantic-ui-react'
import defaultAlbumArtUrl from '../assets/logo.svg'

class RecommendedSongs extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      img: defaultAlbumArtUrl
    }
  }
  render () {
    return (
      <List relaxed='very'>
        <List.Item>
          <Image src={this.state.img}/>
          <List.Content>
            <List.Header as='a'>song1</List.Header>
            <List.Description>
              Related Information
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image src={this.state.img}/>
          <List.Content>
            <List.Header as='a'>song2</List.Header>
            <List.Description>
              Related Information
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <Image src={this.state.img}/>
          <List.Content>
            <List.Header as='a'>song3</List.Header>
            <List.Description>
              Related Information
            </List.Description>
          </List.Content>
        </List.Item>
      </List>

    )
  }

}

export default RecommendedSongs
