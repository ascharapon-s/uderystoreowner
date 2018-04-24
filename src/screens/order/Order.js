import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, View, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import FoodItem from '/reactnative/uderystoreowner/src/components/FoodItem';

export default class order extends Component {
  constructor(props) {
   super(props);
   this.state = {
     selected1: 'key0',
     buttonColor: 'red',
     list: [
       { id: 0, foodName: 'ข้าวผัดหมู', price: 25, stat1: 'green', stat2: 'green', stat3: 'red' },
       { id: 1, foodName: 'กะเพราไก่', price: 25, stat1: 'green', stat2: 'red', stat3: 'red' },
       { id: 2, foodName: 'สุกี้แห้งไก่', price: 25, stat1: 'green', stat2: 'green', stat3: 'red' },
       { id: 3, foodName: 'ผัดไข่เค็มหมึก', price: 30, stat1: 'green', stat2: 'red', stat3: 'red' },
       { id: 4, foodName: 'มักกะโรนีกุ้ง', price: 30, stat1: 'red', stat2: 'red', stat3: 'red' },
       { id: 5, foodName: 'ต้มยำทะเล', price: 50, stat1: 'red', stat2: 'red', stat3: 'red' },
       { id: 6, foodName: 'คั่วไก่', price: 25, stat1: 'red', stat2: 'red', stat3: 'red' }
     ],
   };
  }

  renderFoodItem() {
    return this.state.list.map(item =>
      <FoodItem key={item.foodName} item={item} />
    );
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>

                <View style={{ flex: 1, backgroundColor: '#F6B749', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, marginLeft: 15, color: 'white' }}>รายการสั่งซื้อ</Text>
                </View>

                <View style={{ flex: 8 }}>
                <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 5 }}>
                    {this.renderFoodItem()}
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
