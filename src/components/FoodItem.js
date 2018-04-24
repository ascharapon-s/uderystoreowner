import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, View, Footer, FooterTab, Icon } from 'native-base';

export default class foodItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      stat1: props.item.stat1,
      stat2: props.item.stat2,
      stat3: props.item.stat3,
   };
  }

  toggleStat1() {
    if (this.state.stat1 === 'green') {
      this.setState({ stat1: 'red' });
    } else if (this.state.stat1 === 'red') {
      this.setState({ stat1: 'green' });
    }
  }

  toggleStat2() {
    if (this.state.stat2 === 'green') {
      this.setState({ stat2: 'red' });
    } else if (this.state.stat2 === 'red') {
      this.setState({ stat2: 'green' });
    }
  }

  toggleStat3() {
    if (this.state.stat3 === 'green') {
      this.setState({ stat3: 'red' });
    } else if (this.state.stat3 === 'red' && this.state.stat2 === 'green') {
      this.setState({ stat3: 'green' });
    }
  }

  render() {
    if (this.state.stat3 !== 'green') {
      return (
        <Card style={{ flexDirection: 'row', flexWrap: 'wrap', height: 120, marginTop: 0 }} >
              <CardItem style={{ margin: 0 }}>
                  <Image
                    style={{ width: 170, height: 100, marginLeft: 0 }}
                    source={require('/reactnative/uderystoreowner/src/img/sm.jpg')}
                  />
              </CardItem>
              <CardItem style={{ flex: 1, flexDirection: 'column', marginRight: 20 }}>
                  <CardItem style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 0, width: 200 }}>
                      <View style={{ height: 30, marginLeft: 1 }}>
                        <Text>{this.state.item.foodName}</Text>
                      </View>
                      <View style={{ height: 30 }}>
                        <Text>{this.state.item.price}</Text>
                      </View>
                  </CardItem>
                  <CardItem style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', width: 220 }}>
                        <Button vertical rounded danger onPress={() => { this.toggleStat1(); }} style={{ marginLeft: 10, backgroundColor: this.state.stat1 }}>
                          <Icon active name="flame" />
                        </Button>
                        <Button vertical rounded danger onPress={() => { this.toggleStat2(); }} style={{ marginLeft: 10, backgroundColor: this.state.stat2 }}>
                          <Icon active name="cart" />
                        </Button>
                        <Button vertical rounded danger onPress={() => { this.toggleStat3(); }} style={{ marginLeft: 10, marginRight: 5, backgroundColor: this.state.stat3 }}>
                          <Icon active name="paper-plane" />
                        </Button>
                  </CardItem>
              </CardItem>
        </Card>
     );
   }
   return(null);
  }
}
