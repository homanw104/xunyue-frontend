import React from 'react'
import {Container, Grid, Header} from 'semantic-ui-react'

import MenuBar from '../components/Public/MenuBar'
import Footer from "../components/Public/Footer";
import TrackInfo from '../components/SearchTracks/TrackInfo'
import MoreOfTrack from '../components/SearchTracks/MoreOfTrack'
import BackendApiUtil from '../util/BackendApiUtil'

const mainContainerStyle = {
  'marginTop': '6em'
}

class SearchTracksPage extends React.Component {

  constructor(props) {
    super(props);

    // Parse query string from URL.
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get('q');
    const trackId = urlParams.get('id');

    // If no query string found from URL, return home.
    if (param === null) {
      window.location.href = '../';
    }

    this.state = {
      loading: true,    /* Indicates whether data is still fetching */
      query: param,     /* Currently querying string */
      tracksData: null,
      id: trackId
    }
  }

  componentDidMount() {
    // Get search results from backend.
    BackendApiUtil.getTracksList(this.state.query).then((response) => {
      if (response.data['code'] === 200) {
        this.setState({
          loading: false,
          tracksData: response.data['data'],
        })
      } else if (response.data['code'] === 404) {
        this.setState({
          loading: false,
          tracksData: null
        })
      }
    }).catch((error) => {
      // TODO Show error.
      console.log('Error in getSearchData: ' + error)
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
                <Header as='h1' dividing>Track Details</Header>
                <TrackInfo query={this.state.query} trackId={this.state.id} loading={this.state.loading}/>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={10} floated='right'>
              <Header as='h1' dividing>All results</Header>
              <MoreOfTrack query={this.state.query} data={this.state.tracksData} loading={this.state.loading}/>
            </Grid.Column>

          </Grid>
        </Container>
        <Footer/>
      </Container>
    )
  }
}

export default SearchTracksPage;
