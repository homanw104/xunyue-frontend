import React from 'react'
import axios from 'axios'
import {Button, Form, Container} from 'semantic-ui-react'
import {backendUrl} from '../util/BackendApiUtil'
import MenuBar from '../components/Public/MenuBar'
import Footer from '../components/Public/Footer'

const mainContainerStyle = {
  marginTop: '6em'
}

class EditTrackPage extends React.Component {

  constructor(props) {
    super(props);

    // Parse query string from URL.
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    this.state = {
      trackId: id,
      artistName: '',
      duration: '',
      explicit: '',
      artistId: '',
      trackName: '',
      popularity: '',
      releaseData: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleOnSubmit = () => {
    const postOptions = {
      method: 'post',
      url: backendUrl + '/tracks/insert',
      params: {
        artists: this.state.artistName,
        duration_ms: this.state.duration,
        explicit: this.state.explicit,
        id_artists: this.state.artistId,
        name: this.state.trackName,
        popularity: this.state.popularity,
        release_date: this.state.releaseData
      }
    }
    axios(postOptions).then(() => {
      window.history.back();
    }).catch((error) => {
      // Todo Show error.
      console.log(error);
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleClickDelete = () => {
    const postOptions = {
      method: 'post',
      url: backendUrl + '/tracks/delete',
      params: {
        id: this.state.trackId
      }
    }
    axios(postOptions).then(() => {
      window.history.back();
    }).catch((error) => {
      // TODO Show error.
      console.log(error);
    })
  }

  render() {
    return (
      <Container style={mainContainerStyle}>
        <MenuBar/>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Input label='Track Name' name='trackName'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Artist Name' name='artistName'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Artist ID' name='artistId'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Duration(ms)' name='duration'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Release Data' name='releaseData'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Explicit' name='explicit'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Popularity' name='popularity'
                      onChange={this.handleInputChange}
          />
          <Button onClick={this.handleClickDelete}>Delete Track</Button>
          <Button type='submit'>Submit Changes</Button>
        </Form>
        <Footer/>
      </Container>
    )
  }

}

export default EditTrackPage;
