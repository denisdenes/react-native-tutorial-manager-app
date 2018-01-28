import React, { Component } from 'react';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';
import { View, Text }       from 'react-native';

class Application extends Component {
  render() {
    return (
      <Provider store={createStore(() => [])}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default Application;