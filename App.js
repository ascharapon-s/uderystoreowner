import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'native-base'
//import { Router, Scene } from 'react-native-router-flux'

import OrderScreen from './src/screens/order/Order';
import HistoryScreen from './src/screens/history/History';
//import History from './src/History'
//import Store from './src/Store'

export default class App extends Component {
  render() {
    return (
      StackNavigator({
        Order: { screen: OrderScreen, initialRouteName: OrderScreen },
        History: { screen: HistoryScreen },
      })
    );
  }
}
