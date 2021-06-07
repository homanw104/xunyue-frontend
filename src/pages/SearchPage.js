import React from 'react';
import { Container, Grid, Header } from "semantic-ui-react";

import MenuBar from "../components/MenuBar";
import ResultTop from "../components/ResultTop";
import ResultSongs from "../components/ResultSongs";
import ResultArtists from "../components/ResultArtists";
import TopSearches from '../components/TopSearches'
import BackendApiUtil from "../util/BackendApiUtil";

const mainContainerStyle = {
  marginTop: '6em'
}

class SearchPage extends React.Component {

  constructor(props) {
    super(props);

    // Parse query string from URL.
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get('q');

    // If no query string found from URL, return home.
    if (param === null) {
      window.location.href = '../';
    }

    // Set query string in component's state.
    this.state = {
      query: param, /* Currently querying string */
      data: null    /* Search result data */
    }
  }

  componentDidMount() {
    // Get search results from backend.
    BackendApiUtil.getSearchData(this.state.query).then((response) => {
      this.setState({
        data: response
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <MenuBar query={this.state.query}/>

        <Container style={mainContainerStyle}>
          <Grid columns={16} stackable>

            <Grid.Row>
              <Grid.Column width={5}>
                <Header as='h1' dividing>Top Results</Header>
                <ResultTop data={this.state.data} trackId={'00RiMSj1Voh0LaOfLgj95N'}/>
              </Grid.Column>
              <Grid.Column width={11}>
                <Header as='h1' dividing>Songs</Header>
                <ResultSongs data={this.state.data}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h1' dividing>Artists</Header>
                <ResultArtists data={this.state.data}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h1' dividing>Top Search</Header>
                <TopSearches />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Container>

      </div>
    )
  }
}

export default SearchPage;
