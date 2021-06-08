import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import ResultTop from '../components/ResultTop'
import MenuBar from '../components/MenuBar'
import { Link } from 'react-router-dom'
import defaultAlbumArtUrl from '../assets/logo.svg'
import DuplicateSongs from '../components/DuplicateSongs'
import RecommendedSongs from '../components/RecommendedSongs'

const mainContainerStyle = {
  'margin-top': '6em'
}

class TrackSearchPage extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
    this.state = {
      img: defaultAlbumArtUrl
    }
  }

  handleSearchSubmit = () => {
    console.log('search:', this.state.query)
  }

  render () {
    return (
      <div>
        <MenuBar/>

        <Container style={mainContainerStyle}>
          <Grid columns={16}>


            <Grid.Column width={6}>
              <Header as='h1' dividing>Top Results</Header>
              <ResultTop trackId={'1HXdv1z9RlvrcUernyf0MY'}/>
            </Grid.Column>

            <Grid.Column width={10}>
              <Grid.Row>
                <Header as='h1' dividing>Maybe You Want To Search</Header>
                <DuplicateSongs/>
              </Grid.Row>


              <Grid.Row style={{marginTop:'2em'}}>
                <Grid columns={16}>
                  <Grid.Column width={8}>
                    <Header as='h1' dividing>Artist Related</Header>
                    <RecommendedSongs/>
                  </Grid.Column>

                  <Grid.Column width={8}>
                    <Header as='h1' dividing>Top Search</Header>
                    <RecommendedSongs/>
                  </Grid.Column>
                </Grid>
              </Grid.Row>


            </Grid.Column>

          </Grid>
        </Container>
        <Link to="/addArtist">
          <button className="ui icon button">
            <i aria-hidden="true" className="search icon">
            </i>
          </button>
        </Link>

      </div>
    )
  }
}

export default TrackSearchPage