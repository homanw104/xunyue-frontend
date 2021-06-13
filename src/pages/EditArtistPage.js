import React from 'react'
import axios from 'axios'
import {Button, Form, Container} from 'semantic-ui-react'

import {backendUrl} from '../util/BackendApiUtil'
import MenuBar from '../components/Public/MenuBar'
import Footer from '../components/Public/Footer'

const mainContainerStyle = {
  marginTop: '6em'
}

class EditArtistPage extends React.Component {

  constructor(props) {
    super(props);

    // Parse query string from URL.
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    this.state = {
      artistId: id,
      artistName: '',
      followers: '',
      genres: '',
      popularity: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleOnSubmit = () => {
    const postOptions = {
      method: 'post',
      url: backendUrl + '/artists/insert',
      params: {
        name: this.state.artistName,
        followers: this.state.followers,
        genres: this.state.genres,
        popularity: this.state.popularity
      }
    }
    axios(postOptions).then(() => {
      window.history.go(-2);
    }).catch((error) => {
      // TODO Show error.
      console.log(error);
    })
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleClickDelete = () => {
    const postOptions = {
      method: 'post',
      url: backendUrl + '/artists/delete',
      params: {
        id: this.state.artistId
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
          <Form.Input label='Artist name' name='artistName'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Followers' name='followers'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Genres' name='genres'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Popularity' name='popularity'
                      onChange={this.handleInputChange}
          />
          <Button onClick={this.handleClickDelete}>Delete Artist</Button>
          <Button type='submit'>Submit Changes</Button>
        </Form>
        <Footer/>
      </Container>
    )
  }

}

export default EditArtistPage;
