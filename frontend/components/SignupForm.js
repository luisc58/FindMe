import React, { Component } from 'react';
import Form from './styles/Form';
import styled  from 'styled-components';

const FormContainer = styled.div`
    margin: 0 30rem;
`;
class SignupForm extends Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    }
    handleChange = e => {
        const { name, value} = e.target;
        this.setState({ [name]: value})
    }
    render() {
        return (
            <FormContainer>
            <Form
                data-test="form"
                onSubmit={ e => {
                e.preventDefault();
            }}
          >
          <fieldset>
              <label htmlFor="email">
                <input
                type="text"
                id="email"
                name="email"
                placeHolder="Email address"
                required
                value={this.state.email}
                onChange={this.handleChange}
                />
              </label>

              <label htmlFor="firstName">
                <input
                type="text"
                id="firstName"
                name="firstName"
                placeHolder="First name"
                required
                value={this.state.firstName}
                onChange={this.handleChange}
                />
              </label>
              <label htmlFor="lastName">
                <input
                type="text"
                id="lastName"
                name="lastName"
                placeHolder="Last name"
                required
                value={this.state.lastName}
                onChange={this.handleChange}
                />
              </label>
              <label htmlFor="password">
                <input
                type="password"
                id="password"
                name="password"
                placeHolder="Password"
                required
                value={this.state.password}
                onChange={this.handleChange}
                />
              </label>
              <button type="submit">Sign up</button>
          </fieldset> 

           <p>Already have an account? <a>Log in</a></p>
          </Form>
            </FormContainer>
        );
    }
}

export default SignupForm;