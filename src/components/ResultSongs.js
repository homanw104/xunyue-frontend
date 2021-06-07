import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import defaultAlbumArtUrl from '../assets/album.svg'

class ResultSongs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: defaultAlbumArtUrl
    }
  }
  
  render() {
    return(
      <Grid columns={2}>
        <Grid.Row>

          <Grid.Column>
            <Link to="/trackSearch">
              <Image src={this.state.img}/>
            </Link>
          </Grid.Column>

          <Grid.Column>
            <Image src={this.state.img} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src={this.state.img} />
          </Grid.Column>
          <Grid.Column>
            <Image src={this.state.img} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src={this.state.img} />
          </Grid.Column>
          <Grid.Column>
            <Image src={this.state.img} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ResultSongs;
