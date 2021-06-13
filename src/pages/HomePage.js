import React from 'react'
import {Grid, Header, Container, Form} from 'semantic-ui-react'

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
    }
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <Container>
        <Grid columns={16}>

          <Grid.Row centered verticalAlign='bottom' style={{height: '45vh'}}>
            <Grid.Column mobile={14} tablet={10} computer={6}>
              <Header as='h1'
                      textAlign="center"
                      style={{
                        fontSize: '45px',
                        fontFamily: '"PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei"'
                      }}>
                寻乐
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered verticalAlign='top' style={{height: '45vh'}}>
            <Grid.Column mobile={14} tablet={10} computer={6}>
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

export default HomePage;
