import React from 'react';
import {Container, Grid, Header} from "semantic-ui-react";

import MenuBar from "../components/Public/MenuBar";
import Footer from "../components/Public/Footer";
import ResultTop from "../components/Search/ResultTop";
import ResultSongs from "../components/Search/ResultSongs";
import ResultArtists from "../components/Search/ResultArtists";
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

    // Set query string and component data in state.
    this.state = {
      loading: true,    /* Indicates whether data is still fetching */
      query: param,     /* Currently querying string */
      topData: null,    /* Top result data */
      tracksData: null, /* Tracks result data */
      artistsData: null /* Artists result data */
    }
  }

  handleSearchSubmit = () => {
    if (this.state.query !== '') {
      window.location.href = './tracks/search?q=' + this.state.query;
    }
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  componentDidMount() {
    // Get search results from backend.
    BackendApiUtil.getSearchData(this.state.query).then((response) => {
      if (response.data['code'] === 200) {
        this.setState({
          loading: false,
          topData: response.data['data']['top'],
          tracksData: response.data['data']['tracks'],
          artistsData: response.data['data']['artists']
        });
      } else if (response.data['code'] === 404) {
        this.setState({
          loading: false,
          topData: null,
          tracksData: null,
          artistsData: null
        });
      }
    }).catch((error) => {
      // TODO Show error.
      console.log('Error in getSearchData: ' + error);
    });
  }

  render() {
    if (this.state.loading === false && this.state.topData === null) {

      // Return a universal prompt when no result is to display.
      return (
        <Container>
          <MenuBar query={this.state.query}/>
          <Container style={mainContainerStyle}>
            <Grid columns={16}>

              <Grid.Row centered verticalAlign='bottom' style={{ height: '40vh' }}>
                <Grid.Column width={16}>
                  <Header as='h1' textAlign="center">
                    No results found for "{this.state.query}"
                  </Header>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row centered verticalAlign='top' style={{height: '40vh'}}>
                <Grid.Column width={16}>
                  <Header sub as='h1' textAlign="center">
                    Please make sure your words are spelled correctly or use less or different keywords.
                  </Header>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Container>
          <Footer/>
        </Container>
      );

    } else {

      // Return a result page.
      return (
        <Container>
          <MenuBar query={this.state.query}/>
          <Container style={mainContainerStyle}>
            <Grid columns={16} stackable>

              <Grid.Row>
                <Grid.Column width={5}>
                  <Header as='h1' dividing>Top Result</Header>
                  <ResultTop query={this.state.query} data={this.state.topData} loading={this.state.loading}/>
                </Grid.Column>
                <Grid.Column width={10} floated='right'>
                  <Header as='h1' dividing>Songs</Header>
                  <ResultSongs query={this.state.query} data={this.state.tracksData} loading={this.state.loading}/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  <Header as='h1' dividing>Artists</Header>
                  <ResultArtists query={this.state.query} data={this.state.artistsData} loading={this.state.loading}/>
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Container>
          <Footer/>
        </Container>
      );

    }
  }
}

export default SearchPage;
