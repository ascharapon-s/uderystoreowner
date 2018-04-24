import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, View, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class menu extends Component {

  constructor(props) {
   super(props);
   this.state = {
     selected1: 'key0',
     buttonColor: 'red',
     list: [{ id: 0, foodName: 'ข้าวผัด', price: 25 }, { id: 1, foodName: 'กะเพรา', price: 25 },
     { id: 2, foodName: 'สุกี้แห้ง', price: 25 }, { id: 3, foodName: 'ผัดไข่เค็ม', price: 25 },
     { id: 4, foodName: 'มักกะโรนี', price: 25 }, { id: 5, foodName: 'ผัดเผ็ด', price: 25 },
     { id: 6, foodName: 'แกงกะหรี่', price: 25 }],
     list2: [{ id: 1, proteinName: 'หมู', price: 5 }, { id: 1, proteinName: 'ไก่', price: 5 },
     { id: 2, proteinName: 'กุ้ง', price: 10 }],
     list3: [{ id: 1, toppingName: 'ไข่ดาว', price: 10 }, { id: 1, toppingName: 'ไข่เจียว', price: 10 },
     { id: 2, toppingName: 'ไข่ต้ม', price: 10 }],
     listMenu: [],
     listProtein: [],

   };
  }

  componentDidMount() {
    this.getMenuItem();
    this.getProteinItem();
  }

  getMenuItem() {
    fetch('http://35.185.182.152:3000/api/stores/5adee4b49bbb3628a48609e4/menuitems')
      .then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);

        this.setState({
          listMenu: responseJson,

        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  getProteinItem() {
    fetch('http://35.185.182.152:3000/api/stores/5adee4b49bbb3628a48609e4/proteinitems')
      .then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);

        this.setState({
          listProtein: responseJson,

        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  addProteinItem() {
    fetch('http://35.185.182.152:3000/api/stores/5adee4b49bbb3628a48609e4/proteinitems', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'หมู',
        price: '5',
      }),
    });
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>

                <View style={{ flex: 0.08, backgroundColor: '#F6B749', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, marginLeft: 15, color: 'white' }}>แก้ไขเมนูอาหาร</Text>
                </View>

            <Content padder>

                <ScrollView>

                <Text>เมนูอาหาร</Text>

                <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 5 }}>
                    {this.state.listMenu.map((item, index) => (
                        <Card style={{ flexDirection: 'row', flexWrap: 'wrap', height: 120, marginTop: 0 }} key={index}>
                              <CardItem style={{ margin: 0 }}>
                                  <Image
                                    style={{ width: 170, height: 100, marginLeft: 0 }}
                                    source={require('/reactnative/uderystoreowner/src/img/sm.jpg')}
                                  />
                              </CardItem>
                              <CardItem style={{ flex: 1, flexDirection: 'column', marginRight: 20 }}>
                                  <CardItem style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 0, width: 200 }}>
                                      <View style={{ height: 30, marginLeft: 1 }}>
                                        <Text>{item.name}</Text>
                                      </View>
                                      <View style={{ height: 30 }}>
                                        <Text>{item.price}</Text>
                                      </View>
                                  </CardItem>
                                  <CardItem style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', width: 220 }}>

                                  </CardItem>
                              </CardItem>
                        </Card>
                      ))
                    }
                </View>

                <Button block
                      onPress={() => { Actions.addmenu(); }}
                      style={{ marginTop: 10, marginBottom: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>+ Add Menu</Text>
                </Button>

                <Text>เนื้อสัตว์</Text>

                <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 5 }}>
                    {this.state.listProtein.map((item, index) => (
                        <Card style={{ flexDirection: 'row', flexWrap: 'wrap', height: 120, marginTop: 0 }} key={index}>
                              <CardItem style={{ margin: 0 }}>
                                  <Image
                                    style={{ width: 170, height: 100, marginLeft: 0 }}
                                    source={require('/reactnative/uderystoreowner/src/img/sm.jpg')}
                                  />
                              </CardItem>
                              <CardItem style={{ flex: 1, flexDirection: 'column', marginRight: 20 }}>
                                  <CardItem style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 0, width: 200 }}>
                                      <View style={{ height: 30, marginLeft: 1 }}>
                                        <Text>{item.name}</Text>
                                      </View>
                                      <View style={{ height: 30 }}>
                                        <Text>{item.price}</Text>
                                      </View>
                                  </CardItem>
                                  <CardItem style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', width: 220 }}>

                                  </CardItem>
                              </CardItem>
                        </Card>
                      ))
                    }
                </View>

                <Button block
                      onPress={() => { Actions.addprotein(); }}
                      style={{ marginTop: 10, marginBottom: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>+ Add Protein</Text>
                </Button>

                <Text>ท้อปปิ้ง</Text>

                <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 5 }}>
                    {this.state.list3.map((item, index) => (
                        <Card style={{ flexDirection: 'row', flexWrap: 'wrap', height: 120, marginTop: 0 }} key={index}>
                              <CardItem style={{ margin: 0 }}>
                                  <Image
                                    style={{ width: 170, height: 100, marginLeft: 0 }}
                                    source={require('/reactnative/uderystoreowner/src/img/sm.jpg')}
                                  />
                              </CardItem>
                              <CardItem style={{ flex: 1, flexDirection: 'column', marginRight: 20 }}>
                                  <CardItem style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 0, width: 200 }}>
                                      <View style={{ height: 30, marginLeft: 1 }}>
                                        <Text>{item.toppingName}</Text>
                                      </View>
                                      <View style={{ height: 30 }}>
                                        <Text>{item.price}</Text>
                                      </View>
                                  </CardItem>
                                  <CardItem style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', width: 220 }}>

                                  </CardItem>
                              </CardItem>
                        </Card>
                      ))
                    }
                </View>


                <Button block
                      onPress={() => { Actions.addtopping(); }}
                      style={{ marginTop: 10, marginBottom: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>+ Add Topping</Text>
                </Button>

                </ScrollView>

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
