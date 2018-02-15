import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, View, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class history extends Component {
  render() {
    return (
      <Container>
      <View style={{ flex: 1, backgroundColor: '#F6B749', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, marginLeft: 15, color: 'white' }}>ประวัติการสั่งซื้อ</Text>
      </View>

      <View style={{ flex: 8 }}>
                <Content padder>
                <Card>
                      <CardItem>

                          <Body>
                            <Text>
                                ข้าวผัดหมู
                            </Text>
                          </Body>
                      </CardItem>
                </Card>
                <Card>
                      <CardItem>

                          <Body>
                            <Text>
                                ข้าวผัดไก่
                            </Text>
                          </Body>
                      </CardItem>
                </Card>
                <Card>
                      <CardItem>

                          <Body>
                            <Text>
                                กระเพราไก่ ไข่ดาว
                            </Text>
                          </Body>
                      </CardItem>
                </Card>
                <Card>
                      <CardItem>

                          <Body>
                            <Text>
                                กระเพราทะเล
                            </Text>
                          </Body>
                      </CardItem>
                </Card>
                <Card>
                      <CardItem>

                          <Body>
                            <Text>
                                สุกี้แห้งไก่
                            </Text>
                          </Body>
                      </CardItem>
                </Card>

                 </Content>
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
