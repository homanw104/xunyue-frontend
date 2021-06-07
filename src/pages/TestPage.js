import React from 'react';
import MenuBar from "../components/MenuBar";
import TrackInfo from "../components/TrackInfo";
import { Grid, Menu } from 'semantic-ui-react'
class TestPage extends React.Component {
  render() {
    return (
      <Grid>
        <div>
          <MenuBar />
          <TrackInfo trackId={'1HXdv1z9RlvrcUernyf0MY'} />
        </div>
        <Grid textAlign='center' columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Menu fluid vertical>
                <Menu.Item className='header'>Cats</Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <Menu fluid vertical>
                <Menu.Item className='header'>Dogs</Menu.Item>
                <Menu.Item>Poodle</Menu.Item>
                <Menu.Item>Cockerspaniel</Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <Menu fluid vertical>
                <Menu.Item className='header'>Monkeys</Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>


    );
  }
}

export default TestPage;
