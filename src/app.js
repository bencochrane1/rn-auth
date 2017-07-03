import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class MainApp extends Component {

	componentWillMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyBZgTZqoZJWVdCfRlGi-PqX4_sdOISXMAE',
		    authDomain: 'bc-auth.firebaseapp.com',
		    databaseURL: 'https://bc-auth.firebaseio.com',
		    projectId: 'bc-auth',
		    storageBucket: 'bc-auth.appspot.com',
		    messagingSenderId: '153713082779'
  		});
	}

  render() {	
    return (
      <View>
      	<Header headerText="Authentication"/>
      	<LoginForm/>
      </View>
    );
  }
}


export default MainApp;