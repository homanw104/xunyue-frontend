import React from 'react'
import { Link } from 'react-router-dom'
import defaultAlbumArtUrl from '../assets/logo.svg'
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react'

class TopSearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: defaultAlbumArtUrl
    }
  }
  
  render () {
    return (
      <div>
        <Container style={{ marginTop: '3em' }}>
          <Header as='h1' dividing>热门搜索</Header>
        </Container>
        <Container style={{ marginLeft:'3em',marginTop:'3em'}}>

        <div className="ui divided three column grid">
          <div className="row" style={{marginTop:'3em'}}>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
          </div>
          <div className="row" style={{marginTop:'3em'}}>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
          </div>
          <div className="row"style={{marginTop:'3em'}}>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
          </div>
          <div className="row" style={{marginTop:'3em'}}>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
            <div className="column">
              <img src={this.state.img} className="ui image"/>
            </div>
          </div>
        </div>
        </Container>
      </div>
    )
  }
}

export default TopSearchPage
