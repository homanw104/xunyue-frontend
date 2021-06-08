import React from 'react';
import { Image, Item } from "semantic-ui-react";
import { Link } from 'react-router-dom'

import defaultAvatarUrl from '../assets/account_circle.svg'

class ResultArtists extends React.Component {

  render() {
    return(
      <Item.Group divided>
        <Item>
          <Item.Image src={defaultAvatarUrl} />
          <Item.Content>
            <Link to='artistSearch'>
            <Item.Header as='a'>Content Header</Item.Header>
            </Link>
            <Item.Meta>
              <span>Date</span>
              <span>Category</span>
            </Item.Meta>
            <Item.Description>
              A description which may flow for several lines and give context to the content.
            </Item.Description>
            <Item.Extra>
              <Image avatar circular src={defaultAvatarUrl} />
              Username
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }

}

export default ResultArtists;
