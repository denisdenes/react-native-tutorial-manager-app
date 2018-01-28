import React, { Component }                 from 'react';
import { connect }                          from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged }                     from "../actions";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }

  onEmailChange(text) {
  }
}

export default connect(null, { emailChanged })(LoginForm);