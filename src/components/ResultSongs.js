import React from 'react';
import defaultAlbumArtUrl from '../assets/logo.svg'
import {Grid, Image} from "semantic-ui-react";

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
