import React from 'react';
import defaultAlbumArtUrl from '../assets/logo.svg'
import {Image, Item} from "semantic-ui-react";

class ResultArtists extends React.Component {

  render() {
    return(
      <Item.Group divided>
        <Item>
          <Item.Image src={defaultAlbumArtUrl} />
          <Item.Content>
            <Item.Header as='a'>Content Header</Item.Header>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Image avatar circular src={defaultAlbumArtUrl} />
              Username
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }

}

export default ResultArtists;
