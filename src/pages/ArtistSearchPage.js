import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import ResultTop from '../components/ResultTop'
import MenuBar from '../components/MenuBar'
import { Link } from 'react-router-dom'
import defaultAlbumArtUrl from '../assets/logo.svg'
import RecommendedSongs from '../components/RecommendedSongs'

const mainContainerStyle = {
  'margin-top': '6em'
}

class ArtistSearchPage extends React.Component {

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


            <Grid.Column width={5}>
              <Grid.Row>
                <Header as='h1' dividing>Top Results</Header>
                <ResultTop trackId={'1HXdv1z9RlvrcUernyf0MY'}/>
              </Grid.Row>

              <Grid.Row>
                <Link to="/addArtist">
                  <Header.Subheader>The artist content is wrong, click to edit</Header.Subheader>
                </Link>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={1}>

            </Grid.Column>

            <Grid.Column width={10}>
              <Header as='h1' dividing>Recommended Songs</Header>
              <RecommendedSongs/>

            </Grid.Column>

          </Grid>
        </Container>

      </div>
    )
  }
}

export default ArtistSearchPage;