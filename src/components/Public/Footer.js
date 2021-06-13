import React from 'react';
import {Container, Icon, Segment} from "semantic-ui-react";

class Footer extends React.Component {

  handleIconClick = () => {
    window.open('https://github.com/homanw104');
  }

  render() {
    return (
      <Segment vertical style={{padding: '5em 0em'}}>
        <Container textAlign='center'>
          <p>
            Copyright © 2020 - 2021 <a href="https://homans.world" rel="noreferrer" target="_blank">Homan 是企鹅</a>.
          </p>
          <p>
            All rights reserved.
          </p>
          <Icon color='grey' name='github' size='large' onClick={this.handleIconClick}/>
        </Container>
      </Segment>
    )
  }
}

export default Footer;
