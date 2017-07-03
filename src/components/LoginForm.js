import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {

	state = { email: 'test@test.com', password: 'password', error: '', success: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;
		this.setState({ error: '', success: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(this.onLoginSuccess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(this.onSignupSuccess.bind(this))
			.catch(this.onSignupFailure.bind(this));
		});
	}

	onSignupFailure() {
		this.setState({
			error: 'Login Failed :(',
			loading: false
		});		
	}

	onLoginSuccess() {
		this.setState({
			success: 'Login Success :)', 
			loading: false,
			email: '',
			password: ''
		});
	}

	onSignupSuccess() {
		this.setState({
			success: 'Signup Success :)', 
			loading: false,
			email: '',
			password: ''
		});
	}	

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small"/>
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
		);
	}

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
      		{this.renderButton()}
      	</CardSection>

		<Text style={styles.errorTextStyle}>{this.state.error}</Text>      	
		<Text style={styles.successTextStyle}>{this.state.success}</Text>      	
      </Card>
    );
  }
}

const styles = {
	errorTextStyle: {
		color: 'red',
		fontSize: 20,
		alignSelf: 'center'
	},
	successTextStyle: {
		color: 'green',
		fontSize: 20,
		alignSelf: 'center'
	}	
}



