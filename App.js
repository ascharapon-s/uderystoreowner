import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Order from './src/screens/order/Order';
import History from './src/screens/history/History';
// import Store from './src/screens/store/Store';

export default class App extends Component {
  render() {
    return (
      <Router sceneStyle={{}}>
        <Scene key="root">
          <Scene key="order" component={Order} title="Order" />
          <Scene key="history" component={History} title="History" />

        </Scene>
      </Router>
    );
  }
}
