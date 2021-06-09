import React from 'react'
import axios from 'axios'
import { Button, Form, Container} from 'semantic-ui-react'
import { backendUrl } from '../util/BackendApiUtil'
import MenuBar from '../components/MenuBar'
import Footer from '../components/Footer'

const mainContainerStyle = {
  marginTop: '6em'
}

class AddTracksPage extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      artistName: '',
      duration:'',
      explicit:'',
      artistId:'',
      trackName:'',
      popularity:'',
      releaseData:'',


    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  handleOnSubmit = () => {
    const postOptions = {
      method: 'post',
      url: backendUrl + '/tracks/insert',
      params: {
        artists: this.state.artistName,
        duration_ms: this.state.duration,
        explicit: this.state.explicit,
        id_artists:this.state.artistId,
        name:this.state.trackName,
        popularity:this.state.popularity,
        release_date:this.state.releaseData



      }
    }

    axios(postOptions).then(() => {
      window.history.back()
    }).catch((error) => {
      console.log(error)
    })
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <Container style={mainContainerStyle}>
        <MenuBar/>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Input label='Track Name' placeholder='input' name='trackName'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Artist Name' placeholder='input' name='artistName'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Artist ID' placeholder='input' name='artistId'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Duration(ms)' placeholder='input' name='duration'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Release Data' placeholder='input' name='releaseData'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Explicit' placeholder='input' name='explicit'
                      onChange={this.handleInputChange}
          />
          <Form.Input label='Popularity' placeholder='input' name='popularity'
                      onChange={this.handleInputChange}
          />
          <Button type='submit'>Submit</Button>
        </Form>
        <Footer />
      </Container>

    )
  }
}

export default AddTracksPage;
