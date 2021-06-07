import React, { Component } from 'react'
import { Button, Dimmer, Header, Image, Container, Form, Message, Grid } from 'semantic-ui-react'
import HomePage from './HomePage'

class AddArtistPage extends React.Component {

  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render () {
    const { active } = this.state
    const content = (
      <div>
        <Button primary>Add</Button>
      </div>
    )

    return (
      <div>

        <Container style={{ marginTop: '3em', marginLeft: '2em' }}>
          <Dimmer.Dimmable
            as={Image}
            dimmed={active}
            dimmer={{ active, content }}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
            size='medium'
            src='https://react.semantic-ui.com/images/wireframe/image.png'
          />
        </Container>
        <Form>
          <Form.Group>
            <Form.Field>
              <Header as='h4' style={{ marginLeft: '4em', marginTop: '4em' }}>Artist name</Header>
              <input type='text' placeholder='input' style={{ width: '300px', height: '30px', marginLeft: '4em' }}/>
            </Form.Field>

            <Form.Field>
              <Header as='h4' style={{ marginLeft: '8em', marginTop: '4em' }}>Fans</Header>
              <input type='text' placeholder='input' style={{ width: '300px', height: '30px', marginLeft: '8em' }}/>
            </Form.Field>
          </Form.Group>
        </Form>


        <Form>
          <Form.Group>
            <Form.Field>
              <Header as='h4' style={{ marginLeft: '4em', marginTop: '4em' }}>Genre</Header>
              <input type='text' placeholder='input' style={{ width: '300px', height: '30px', marginLeft: '4em' }}/>
            </Form.Field>

            <Form.Field>
              <Header as='h4' style={{ marginLeft: '8em', marginTop: '4em' }}>Popularity</Header>
              <input type='text' placeholder='input' style={{ width: '300px', height: '30px', marginLeft: '8em' }}/>
            </Form.Field>
          </Form.Group>
        </Form>

        <div style={{marginLeft:'75em',marginTop:'-1em'}}>
          <button className="ui button">Submit</button>
        </div>

      </div>

    )
  }
}

export default AddArtistPage
