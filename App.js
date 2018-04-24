import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Order from './src/screens/order/Order';
import History from './src/screens/history/History';
import Store from './src/screens/store/Store';
import Menu from './src/screens/store/Menu';
import AddMenu from './src/screens/store/AddMenu';
import AddProtein from './src/screens/store/AddProtein';
import AddTopping from './src/screens/store/AddTopping';
import Setting from './src/screens/setting/Setting';

export default class App extends Component {
  render() {
    return (
      <Router sceneStyle={{}}>
        <Scene key="root">
          <Scene key="order" component={Order} title="Order" />
          <Scene key="history" component={History} title="History" />
          <Scene key="store" component={Store} title="Store" />
          <Scene key="menu" component={Menu} title="Menu" />
          <Scene key="addmenu" component={AddMenu} title="AddMenu" />
          <Scene key="addprotein" component={AddProtein} title="AddProtein" />
          <Scene key="addtopping" component={AddTopping} title="AddTopping" />
          <Scene key="setting" component={Setting} title="Setting" />
        </Scene>
      </Router>
    );
  }
}
