import React from 'react';
import {Container, Grid, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

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
      errorStr: null,   /* Indicates whether there is error when fetching */
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
          loading: false
        });
      }
    }).catch((error) => {
      this.setState({
        loading: false,
        errorStr: error.toString()
      });
    });
  }

  render() {
    if (this.state.loading === false && this.state.topData === null) {

      // Return a prompt when result is empty.
      return (
        <Container>
          <MenuBar query={this.state.query}/>
          <Container style={mainContainerStyle}>
            <Grid columns={16}>

              <Grid.Row centered verticalAlign='bottom' style={{height: '44vh'}}>
                <Grid.Column width={16}>
                  <Header as='h1' textAlign="center">
                    No results found for "{this.state.query}"
                  </Header>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row centered verticalAlign='top' style={{height: '44vh'}}>
                <Grid.Column width={16}>
                  <Header sub as='h1' textAlign="center">
                    Please make sure your words are spelled correctly or use less or different keywords.<br/><br/>
                    You can <Link to='../addTrack'>add a song</Link> or <Link to='../addArtist'>add an artist</Link>.
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
                  {(this.state.loading === true || this.state.tracksData.length > 0) &&
                  <Header as='h1' dividing>Songs</Header>}
                  <ResultSongs query={this.state.query} data={this.state.tracksData} loading={this.state.loading}/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={16}>
                  {(this.state.loading === true || this.state.artistsData.length > 0) &&
                  <Header as='h1' dividing>Artists</Header>}
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
