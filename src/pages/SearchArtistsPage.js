import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import MenuBar from '../components/Public/MenuBar'
import { Link } from 'react-router-dom'
import RecommendedArtists from '../components/SearchArtists/RecommendedArtists'
import BackendApiUtil from '../util/BackendApiUtil'
import ArtistInfo from '../components/SearchArtists/ArtistInfo'

const mainContainerStyle = {
  'margin-top': '6em'
}

class SearchArtistsPage extends React.Component {

  constructor (props) {
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
      loading: true,    /* Indicates whether data is still fetching */
      query: artistId,     /* Currently querying string */
      artistTracksData: null,
      id: artistId
    }
  }

  handleSearchSubmit = () => {
    console.log('search:', this.state.query)
  }

  componentDidMount () {
    // Get search results from backend.
    BackendApiUtil.getArtistTracks(this.state.query).then((response) => {
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

  render () {
    return (
      <div>
        <MenuBar/>

        <Container style={mainContainerStyle}>
          <Grid columns={16}>

            <Grid.Column width={5}>
              <Grid.Row>
                <Header as='h1' dividing>Artist Details</Header>
                <ArtistInfo artistId={this.state.id} />
              </Grid.Row>

              <Grid.Row>
                <Link to="/addArtist">
                  <Header.Subheader>The track content is wrong, click to edit</Header.Subheader>
                </Link>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={1}>

            </Grid.Column>

            <Grid.Column width={10}>
              <Header as='h1' dividing>All results</Header>
              <RecommendedArtists query={this.state.query} data={this.state.artistTracksData} loading={this.state.loading}/>
            </Grid.Column>

          </Grid>
        </Container>

      </div>
    )
  }
}

export default SearchArtistsPage;