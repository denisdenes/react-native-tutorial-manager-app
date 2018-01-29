import React, { Component }             from 'react';
import { Provider }                     from 'react-redux';
import thunk                            from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers                         from './reducers';
import firebase                         from 'firebase';
import { composeWithDevTools }          from 'redux-devtools-extension';
import Router                           from './Router';

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
    const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Application;