import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, Image, View, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class order extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>

                <View style={{ flex: 0.08, backgroundColor: '#F6B749', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, marginLeft: 15 }}>ร้านของคุณ</Text>
                </View>

            <Content padder>

                <View>
                  <Text style={{ textAlign: 'center' }}>ชื่อร้าน : ขนมหวาน</Text>
                  <Text style={{ textAlign: 'center' }}>ร้านขนมหวานอร่อย พร้อมเสิร์ฟทุกวัน</Text>

                </View>

                <Button dark bordered full
                      //onPress={() => { Actions.history(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>Upload Photo</Text>
                </Button>

                <Button dark bordered full
                      onPress={() => { Actions.history(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>See History</Text>
                </Button>

                <Button dark bordered full
                      //onPress={() => { Actions.history(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>Menu</Text>
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
                      <Button vertical>
                        <Icon name="person" />
                        <Text>Setting</Text>
                      </Button>
                  </FooterTab>
                </Footer>


            </Container>
    );
  }
}
