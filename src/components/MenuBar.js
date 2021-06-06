import React from 'react';
import {Container, Form, Input, Menu} from 'semantic-ui-react'

class MenuBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleHomeClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  handleSearchSubmit = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
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
              <Input icon='search' placeholder='Search...' />
              {/*<Form.Input*/}
              {/*  size='large'*/}
              {/*  action={{ type: 'submit', content: 'Go' }}*/}
              {/*  placeholder='Search...'*/}
              {/*  value={this.state.query}*/}
              {/*  onChange={this.handleInputChange}*/}
              {/*/>*/}
            </Form>
          </Menu.Item>

        </Container>
      </Menu>
    )
  }

}

export default MenuBar;