import React from 'react'
import axios from 'axios'
import { Button, Form, Container} from 'semantic-ui-react'
import { backendUrl } from '../util/BackendApiUtil'
import MenuBar from '../components/Public/MenuBar'
import Footer from '../components/Public/Footer'

const mainContainerStyle = {
  marginTop: '6em'
}

class AddArtistPage extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      artistName: '',
      followers:'',
      genres:'',
      popularity:''


    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  handleOnSubmit = () => {
    const postOptions = {
      method: 'post',
      url: backendUrl + '/artists/insert',
      params: {
        name: this.state.artistName,
        followers: this.state.followers,
        genres: this.state.genres,
        popularity:this.state.popularity
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
            <Form.Input label='Artist name' placeholder='input' name='artistName'
                        onChange={this.handleInputChange}
            />
            <Form.Input label='Followers' placeholder='input' name='followers'
                        onChange={this.handleInputChange}
            />

            <Form.Input label='Genres' placeholder='input' name='genres'
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

export default AddArtistPage
