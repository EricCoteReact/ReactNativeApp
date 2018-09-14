import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import UserList from './UserList'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection:"row", justifyContent: 'center', alignItems: 'center' }}>
        <UserList>Users!</UserList>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Users: UserScreen,
});