import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, View, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class order extends Component {
  constructor(props) {
   super(props);
   this.state = {
     selected1: 'key0',

     list: [{ id: 0, foodName: 'ข้าวผัดหมู', price: 25, stat1: 'จ่ายแล้ว', stat2: 'ทำเสร็จแล้ว', stat3: 'รับแล้ว' }, { id: 1, foodName: 'กะเพราไก่', price: 25, stat1: 'จ่ายแล้ว', stat2: 'ทำเสร็จแล้ว', stat3: 'รับแล้ว' }, { id: 2, foodName: 'สุกี้แห้งไก่', price: 25, stat1: 'จ่ายแล้ว', stat2: 'ทำเสร็จแล้ว', stat3: 'รับแล้ว' }, { id: 3, foodName: 'ผัดไข่เค็มหมึก', price: 25, stat1: 'จ่ายแล้ว', stat2: 'ทำเสร็จแล้ว', stat3: 'รับแล้ว' }, { id: 4, foodName: 'มักกะโรนีกุ้ง', price: 25, stat1: 'จ่ายแล้ว', stat2: 'ทำเสร็จแล้ว', stat3: 'รับแล้ว' }, { id: 5, foodName: 'ส้ม', price: 25, stat1: 'จ่ายแล้ว', stat2: 'ทำเสร็จแล้ว', stat3: 'รับแล้ว' }, { id: 6, foodName: 'ส้ม', price: 25, stat1: 'จ่ายแล้ว', stat2: 'ทำเสร็จแล้ว', stat3: 'รับแล้ว' }]
   };
  }
  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>

                <View style={{ flex: 1, backgroundColor: '#F6B749', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, marginLeft: 15 }}>รายการสั่งซื้อ</Text>
                </View>

                <View style={{ flex: 8 }}>
                <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {this.state.list.map((item, index) => (
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 340, height: 170, margin: 15 }} key={index}>
                              <View style={{ height: 150 }}>
                                  <Image
                                    style={{ width: 170, height: 145 }}
                                    source={require('/reactnative/uderystoreowner/src/img/sw.jpg')}
                                  />
                              </View>
                              <View style={{ flex: 1, flexDirection: 'row', width: 170, height: 20, justifyContent: 'space-between' }}>
                                <View style={{ marginLeft: 15 }}>
                                  <Text>{item.foodName}</Text>
                                </View>
                                <View style={{ height: 20 }}>
                                  <Text>{item.price}</Text>
                                </View>
                              </View>
                        </View>
                      ))
                    }
                </View>

                <Button dark bordered full
                      onPress={() => { Actions.history(); }}
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>See History</Text>
                </Button>

                </ScrollView>

                </View>




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
