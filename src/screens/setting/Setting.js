import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, View, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class setting extends Component {

  constructor(props) {
   super(props);
   this.state = {
     version: '1.0.2',
     updated: '19/4/2018'
   };
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>

                <View style={{ flex: 0.08, backgroundColor: '#F6B749', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, marginLeft: 15, color: 'white' }}>ตั้งค่า</Text>
                </View>

            <Content padder>

                <View style={{ alignItems: 'center', justifyContent: 'center', margin: 20 }}>
                <Image
                  style={{ width: 150, height: 150, borderRadius: 75 }}
                  source={require('/reactnative/uderystoreowner/src/img/uderylogo.png')}
                />
                </View>

                <View>
                  <Text style={{ textAlign: 'center' }}>Version : { this.state.version }</Text>
                  <Text style={{ textAlign: 'center' }}>Updated : { this.state.updated }</Text>

                </View>

                <Button block
                      //onPress={() => { Actions.history(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>Notification</Text>
                </Button>

                <Button block
                      //onPress={() => { Actions.history(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>Logout</Text>
                </Button>

                <Button block
                      //onPress={() => { Actions.menu(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>Report Problem</Text>
                </Button>

              </Content>

                  <Footer>
                    <FooterTab>
                      <Button vertical onPress={() => { Actions.order(); }}>
                        <Icon name="pizza" />
                        <Text>Order</Text>
                      </Button>
                      <Button vertical onPress={() => { Actions.history(); }}>
                        <Icon name="paper" />
                        <Text>History</Text>
                      </Button>
                      <Button vertical onPress={() => { Actions.store(); }}>
                        <Icon active name="navigate" />
                        <Text>Store</Text>
                      </Button>
                      <Button vertical onPress={() => { Actions.setting(); }}>
                        <Icon name="person" />
                        <Text>Setting</Text>
                      </Button>
                  </FooterTab>
                </Footer>


            </Container>
    );
  }
}
