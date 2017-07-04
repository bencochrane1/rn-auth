import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class MainApp extends Component {

	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyBZgTZqoZJWVdCfRlGi-PqX4_sdOISXMAE',
		    authDomain: 'bc-auth.firebaseapp.com',
		    databaseURL: 'https://bc-auth.firebaseio.com',
		    projectId: 'bc-auth',
		    storageBucket: 'bc-auth.appspot.com',
		    messagingSenderId: '153713082779'
  		});

  		firebase.auth().onAuthStateChanged((user) => {
  			if (user) {
  				this.setState({ loggedIn: true });
  			} else {
  				this.setState({ loggedIn: false });
  			}
  		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return  <CardSection><Button onPress={() => { firebase.auth().signOut() }}>
							Log Out
						</Button></CardSection>
			case false:
				return <LoginForm/>
			default:
				return <Spinner size="large"/>
		}
	}

  render() {	
    return (
      <View>
      	<Header headerText="Authentication"/>
      	{ this.renderContent() }
      </View>
    );
  }
}


export default MainApp;