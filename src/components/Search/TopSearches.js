import React from 'react'
import defaultAlbumArtUrl from '../../assets/album.svg'
import { Container } from 'semantic-ui-react'

class TopSearches extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: defaultAlbumArtUrl
    }
  }
  
  render () {
    return (
      <div>
        <Container>

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

export default TopSearches
