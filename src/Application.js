import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';
import { View, Text }       from 'react-native';
import reducers             from './reducers';
import firebase             from 'firebase';
import LoginForm            from './components/LoginForm';

class Application extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCi-kwXpn5FJXhE1_ON_o_TBAPlKxiucYI",
      authDomain: "manager-55c1e.firebaseapp.com",
      databaseURL: "https://manager-55c1e.firebaseio.com",
      projectId: "manager-55c1e",
      storageBucket: "",
      messagingSenderId: "196806051095"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default Application;