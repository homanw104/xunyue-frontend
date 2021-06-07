import React from 'react'
import { Grid, Segment, Input, Header, Container ,Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import TopSearchPage from './TopSearchPage'

class HomePage extends React.Component {

  render () {
    return (
      <Grid>

        <Container style={{ marginTop: '3em' }}>
          <Header as='h1' textAlign="center" style={{ marginTop: '4em', fontSize: '45px' }}>寻乐</Header>
        </Container>


        <div className="ui action input" style={{marginLeft:'530px',marginTop:'2em'}}>
          <input type="text" placeholder="Search tracks / artists..."/>
          <Link to="/search">
            <button className="ui icon button">
              <i aria-hidden="true" className="search icon">
              </i>
            </button>
          </Link>
        </div>





      </Grid>
    )
  }
}

export default HomePage
