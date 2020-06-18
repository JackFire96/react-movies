/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: null,
      email: 'alexandre.houmeau@gmail.com',
      password: 'mot_de_passe',
    };
  }

  // eslint-disable-next-line class-methods-use-this
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { inputEmail, inputPassword, email, password } = this.state;
    if (inputEmail === email && inputPassword === password) {
      localStorage.setItem('isLoggedIn', true);
      this.props.history.push('/feed');
    }
  }

  render() {
    const { inputEmail, inputPassword } = this.state;
    return (
      <Container>
        <Row style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
        >
          <Col md={3} />
          <Col md={6}>
            <Form onSubmit={(event) => this.handleSubmit(event)}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control id="inputEmail" onChange={(event) => this.handleChange(event)} value={inputEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We will never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control id="inputPassword" onChange={(event) => this.handleChange(event)} value={inputPassword} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={3} />
        </Row>
      </Container>
    );
  }
}

export default Login;
