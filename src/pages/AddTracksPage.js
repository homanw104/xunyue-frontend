import React from 'react'
import { Button, Dimmer, Header, Image, Container, Form, Grid } from 'semantic-ui-react'

class AddTracksPage extends React.Component {

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
        <Grid>
          <Grid.Row>
            <Form>
              <Form.Group>
                <Form.Field>
                  <Header as='h4' style={{ marginLeft: '4em', marginTop: '3em' }}>Track name</Header>
                  <input type='text' placeholder='input' style={{ width: '300px', height: '40px', marginLeft: '4em' }}/>
                </Form.Field>

                <Form.Field>
                  <Header as='h4' style={{ marginLeft: '8em', marginTop: '3em' }}>Track Duration</Header>
                  <input type='text' placeholder='input' style={{ width: '300px', height: '40px', marginLeft: '8em' }}/>
                </Form.Field>
              </Form.Group>
            </Form>
          </Grid.Row>

          <Grid.Row>
            <Form>
              <Form.Group>
                <Form.Field>
                  <Header as='h4' style={{ marginLeft: '4em', marginTop: '1em' }}>Explicit</Header>
                  <select placeholder='true' style={{ width: '300px', height: '40px', marginLeft: '4em' }}>
                    <option value='true'>True</option>
                    <option value='false'>False</option>
                  </select>
                </Form.Field>

                <Form.Field>
                  <Header as='h4' style={{ marginLeft: '8em', marginTop: '1em' }}>Publish Time</Header>
                  <input type='text' placeholder='input' style={{ width: '300px', height: '40px', marginLeft: '8em' }}/>
                </Form.Field>
              </Form.Group>
            </Form>
          </Grid.Row>

          <Grid.Row>
            <Form>
              <Form.Group>
                <Form.Field>
                  <Header as='h4' style={{ marginLeft: '4em', marginTop: '1em' }}>Artist</Header>
                  <input type='text' placeholder='input' style={{ width: '300px', height: '40px', marginLeft: '4em' }}/>
                </Form.Field>

                <Form.Field>
                  <Header as='h4' style={{ marginLeft: '8em', marginTop: '1em' }}>Popularity</Header>
                  <input type='text' placeholder='input' style={{ width: '300px', height: '40px', marginLeft: '8em' }}/>
                </Form.Field>
              </Form.Group>
            </Form>
          </Grid.Row>
        </Grid>


        <div style={{ marginLeft: '75em', marginTop: '-5em' }}>
          <button className="ui button">Submit</button>
        </div>

      </div>

    )
  }
}

export default AddTracksPage
