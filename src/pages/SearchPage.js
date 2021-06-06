import React from 'react';
import {Container, Grid, Header} from "semantic-ui-react";
import ResultTop from "../components/ResultTop";
import ResultSongs from "../components/ResultSongs";
import ResultArtists from "../components/ResultArtists";
import MenuBar from "../components/MenuBar";

const mainContainerStyle = {
  'margin-top': '6em'
}

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleSearchSubmit = () => {
    console.log('search:', this.state.query);
  }

  render() {
    return(
      <div>
        <MenuBar />

        <Container style={mainContainerStyle}>
          <Grid columns={16}>

            <Grid.Row>
              <Grid.Column width={6}>
                <Header as='h1' dividing>Top Results</Header>
                <ResultTop trackId={'1HXdv1z9RlvrcUernyf0MY'}/>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h1' dividing>Songs</Header>
                <ResultSongs />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h1' dividing>Artists</Header>
                <ResultArtists />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Container>

      </div>
    )
  }
}

export default SearchPage;
