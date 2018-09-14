import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import TabbedNav from './src/TabbedNav';

const store = configureStore();


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabbedNav />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});



