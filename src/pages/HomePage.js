import React from 'react'
import { Grid, Header, Container, Form } from 'semantic-ui-react'

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleSearchSubmit = () => {
    if (this.state.query !== '') {
      window.location.href = './search?q=' + this.state.query;
    } else {
      /* Do nothing. */
    }
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  render () {
    return (
      <Container>
        <Grid columns={16}>

          <Grid.Row centered>
            <Grid.Column width={6}>
              <Header as='h1' textAlign="center" style={{ marginTop: '4em', fontSize: '45px' }}>寻乐</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered>
            <Grid.Column width={6}>
              <Form onSubmit={this.handleSearchSubmit}>
                <Form.Input
                  icon='search'
                  size='large'
                  placeholder='Search artists and songs'
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Container>
    )
  }
}

export default HomePage
