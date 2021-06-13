import React from 'react';
import {Container, Grid, Header} from 'semantic-ui-react';

import MenuBar from '../components/Public/MenuBar';
import Footer from "../components/Public/Footer";
import ArtistInfo from '../components/SearchArtists/ArtistInfo';
import MoreOfArtist from '../components/SearchArtists/MoreOfArtist';
import BackendApiUtil from '../util/BackendApiUtil';

const mainContainerStyle = {
  'margin-top': '6em'
}

class SearchArtistsPage extends React.Component {

  constructor(props) {
    super(props);

    // Parse query string from URL.
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get('q');
    const artistId = urlParams.get('id');

    // If no query string found from URL, return home.
    if (param === null) {
      window.location.href = '../';
    }

    this.state = {
      loading: true,        /* Indicates whether data is still fetching */
      query: param,         /* Currently querying string */
      artistTracksData: null,
      id: artistId
    }
  }

  componentDidMount() {
    // Get search results from backend.
    BackendApiUtil.getArtistTracks(this.state.id).then((response) => {
      if (response.data['code'] === 200) {
        this.setState({
          loading: false,
          artistTracksData: response.data['data'],
        })
      } else if (response.data['code'] === 404) {
        this.setState({
          loading: false,
          artistTracksData: null
        })
      }
    }).catch((error) => {
      // TODO Show error.
      console.log('Error in getArtistTracks: ' + error)
    })
  }

  render() {
    return (
      <Container>
        <MenuBar query={this.state.query}/>
        <Container style={mainContainerStyle}>
          <Grid columns={16}>

            <Grid.Column width={5}>
              <Grid.Row>
                <Header as='h1' dividing>Artist Details</Header>
                <ArtistInfo query={this.state.query} artistId={this.state.id} loading={this.state.loading}/>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={10} floated='right'>
              <Header as='h1' dividing>All results</Header>
              <MoreOfArtist query={this.state.query} data={this.state.artistTracksData} loading={this.state.loading}/>
            </Grid.Column>

          </Grid>
        </Container>
        <Footer/>
      </Container>
    )
  }
}

export default SearchArtistsPage;
