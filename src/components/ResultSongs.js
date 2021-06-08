import React from 'react'
import { Link } from "react-router-dom";
import { Grid, Header, Image } from 'semantic-ui-react'

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
      <Grid columns={2} style={{height: '100%'}}>

        <Grid.Row>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/trackSearch">
              <Header as='h4' image>
                <Image src={this.state.img}/>
                <Header.Content>
                  Duplicate Song
                  <Header.Subheader>Related Information</Header.Subheader>
                </Header.Content>
              </Header>
            </Link>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}

export default ResultSongs;
