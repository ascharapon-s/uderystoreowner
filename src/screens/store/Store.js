import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, View, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class store extends Component {

  constructor(props) {
   super(props);
   this.state = {
     storeName: 'Loading',
     storeDescription: 'Loading',
     storeOwnerID: '',
   };
  }

  componentDidMount() {
    this.getStore();
  }

  getStore() {
    fetch('http://35.185.182.152:3000/api/stores/5adee4b49bbb3628a48609e4')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          storeName: responseJson.name,
          storeDescription: responseJson.description,
        }, function () {

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>

                <View style={{ flex: 0.08, backgroundColor: '#F6B749', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, marginLeft: 15, color: 'white' }}>ร้านของคุณ</Text>
                </View>

            <Content padder>

                <View style={{ alignItems: 'center', justifyContent: 'center', margin: 20 }}>
                <Image
                  style={{ width: 150, height: 150, borderRadius: 75 }}
                  source={require('/reactnative/uderystoreowner/src/img/kaprao.jpg')}
                />
                </View>

                <View>
                  <Text style={{ textAlign: 'center' }}>ชื่อร้าน : {this.state.storeName}</Text>
                  <Text style={{ textAlign: 'center' }}>{this.state.storeDescription}</Text>

                </View>

                <Button block
                      //onPress={() => { Actions.history(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>Upload Photo</Text>
                </Button>

                <Button block
                      //onPress={() => { Actions.history(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>Edit Store Profile</Text>
                </Button>

                <Button block
                      onPress={() => { Actions.menu(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>Edit Menu</Text>
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
