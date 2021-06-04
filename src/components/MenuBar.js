import React from 'react';
import { Input, Menu } from 'semantic-ui-react'

class MenuBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Menu>
        <Menu.Item>
          <Input
            action={{ type: 'submit', content: 'Go' }}
            placeholder='Navigate to...'
          />
        </Menu.Item>
      </Menu>
    )
  }

}

export default MenuBar;