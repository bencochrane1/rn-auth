import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


export default class LoginForm extends Component {

	state = { email: '', password: '' };

  render() {
    return (
      <Card>
      	<CardSection>
      		<Input
      			autoCapitalize="none"
      			keyboardType="email-address"
      			placeholder="user@gmail.com"
      			label="Email"
      			value={this.state.email}
      			onChangeText={email => this.setState({email})}/>
      	</CardSection>
      	<CardSection />
      		<Input
      			secureTextEntry
      			autoCapitalize="none"
      			placeholder="password"
      			label="Password"
      			value={this.state.password}
      			onChangeText={password => this.setState({password})}/>      		

      	<CardSection>
      		<Button>Log In</Button>
      	</CardSection>
      </Card>
    );
  }
}
