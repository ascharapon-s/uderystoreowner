import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, Image, View, Footer, FooterTab, Icon } from 'native-base';
//import { Actions } from 'react-native-router-flux';

export default class order extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>

                <View style={{ flex: 0.08, backgroundColor: '#F6B749', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, marginLeft: 15 }}>รายการสั่งซื้อ</Text>
                </View>

            <Content padder>

                <Card>
                    <CardItem>
                          <View style={{ flex: 1 }} >
                            <Text style={{ color: 'red', textAlign: 'left' }}>
                                ข้าวผัดหมู
                            </Text>
                          </View>
                          <View style={{ flex: 1 }} >
                          <Text style={{ color: 'red', textAlign: 'right' }}>
                              30 บาท
                          </Text>
                          </View>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                          <View style={{ flex: 1 }} >
                            <Text style={{ color: 'red', textAlign: 'left' }}>
                                ข้าวผัดไก่
                            </Text>
                          </View>
                          <View style={{ flex: 1 }} >
                          <Text style={{ color: 'green', textAlign: 'right' }}>
                              30 บาท
                          </Text>
                          </View>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                          <View style={{ flex: 1 }} >
                            <Text style={{ color: 'green', textAlign: 'left' }}>
                                ข้าวผัดทะเล
                            </Text>
                          </View>
                          <View style={{ flex: 1 }} >
                          <Text style={{ color: 'green', textAlign: 'right' }}>
                              35 บาท
                          </Text>
                          </View>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                          <View style={{ flex: 1 }} >
                            <Text style={{ color: 'red', textAlign: 'left' }}>
                                ข้าวผัดหมู
                            </Text>
                          </View>
                          <View style={{ flex: 1 }} >
                          <Text style={{ color: 'red', textAlign: 'right' }}>
                              30 บาท
                          </Text>
                          </View>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                          <View style={{ flex: 1 }} >
                            <Text style={{ color: 'red', textAlign: 'left' }}>
                                ข้าวผัดหมู
                            </Text>
                          </View>
                          <View style={{ flex: 1 }} >
                          <Text style={{ color: 'red', textAlign: 'right' }}>
                              30 บาท
                          </Text>
                          </View>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                          <View style={{ flex: 1 }} >
                            <Text style={{ color: 'red', textAlign: 'left' }}>
                                ข้าวผัดหมู
                            </Text>
                          </View>
                          <View style={{ flex: 1 }} >
                          <Text style={{ color: 'red', textAlign: 'right' }}>
                              30 บาท
                          </Text>
                          </View>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                          <View style={{ flex: 1 }} >
                            <Text style={{ color: 'red', textAlign: 'left' }}>
                                ข้าวผัดหมู
                            </Text>
                          </View>
                          <View style={{ flex: 1 }} >
                          <Text style={{ color: 'red', textAlign: 'right' }}>
                              30 บาท
                          </Text>
                          </View>
                    </CardItem>
                </Card>

                <Button dark bordered full
                      style={{ marginTop: 30, flex: 1, backgroundColor: '#F6B749' }} >
                      <Text>See History</Text>
                </Button>
              </Content>

                  <Footer>
                    <FooterTab>
                      <Button vertical onPress={() => { navigate('OrderScreen', { name: 'Jane' }); }}>
                        <Icon name="pizza" />
                        <Text>Order</Text>
                      </Button>
                      <Button vertical onPress={() => { navigate('HistoryScreen', { name: 'Jane' }); }}>
                        <Icon name="paper" />
                        <Text>History</Text>
                      </Button>
                      <Button vertical>
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
