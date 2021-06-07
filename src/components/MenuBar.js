import React from 'react';
import { Container, Form, Menu } from 'semantic-ui-react'

class MenuBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query
    }
  }

  handleHomeClick = (e, { name }) => {
    window.location.href = '../';
  }

  handleSearchSubmit = () => {
    window.location.href = '../search?q=' + this.state.query;
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    return(
      <Menu fixed={'top'} borderless={true}>
        <Container>

          <Menu.Item name='home' onClick={this.handleHomeClick}>
            Xun Yue
          </Menu.Item>
          <Menu.Item>
            <Form onSubmit={this.handleSearchSubmit}>
              <Form.Input
                icon='search'
                size='large'
                placeholder='Search artists and songs'
                value={this.state.query}
                onChange={this.handleInputChange}
              />
            </Form>
          </Menu.Item>

        </Container>
      </Menu>
    )
  }

}

export default MenuBar;
