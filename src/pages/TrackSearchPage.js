import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import MenuBar from '../components/MenuBar'
import { Link } from 'react-router-dom'
import RecommendedSongs from '../components/RecommendedSongs'
import TrackInfo from '../components/TrackInfo'
import BackendApiUtil from '../util/BackendApiUtil'

const mainContainerStyle = {
  'margin-top': '6em'
}

class TrackSearchPage extends React.Component {

  constructor (props) {
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

  handleSearchSubmit = () => {
    console.log('search:', this.state.query)
  }

  componentDidMount () {
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

  render () {
    return (
      <div>
        <MenuBar/>

        <Container style={mainContainerStyle}>
          <Grid columns={16}>

            <Grid.Column width={5}>
              <Grid.Row>
                <Header as='h1' dividing>Track Details</Header>
                <TrackInfo trackId={this.state.id} />
              </Grid.Row>

              <Grid.Row>
                <Link to="/addTracks">
                  <Header.Subheader>The track content is wrong, click to edit</Header.Subheader>
                </Link>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={1}>

            </Grid.Column>

            <Grid.Column width={10}>
              <Header as='h1' dividing>All results</Header>
              <RecommendedSongs query={this.state.query} data={this.state.tracksData} loading={this.state.loading}/>
            </Grid.Column>

          </Grid>
        </Container>

      </div>
    )
  }
}

export default TrackSearchPage