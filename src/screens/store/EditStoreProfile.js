import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Container, Header, Content, Input, Item, View, Text, Button } from 'native-base';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { storeName: 'ชื่อท็อปปิ้ง', storeDescription: 'ราคา' };
  }

  render() {
    return (
      <Container>
      <View style={{ height: 40, backgroundColor: '#F6B749', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, marginLeft: 15, color: 'white' }}>เพิ่มท็อปปิ้ง</Text>
      </View>
      <View style={{ flex: 1, margin: 30 }}>
      <Item>
            <Input
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name} />
      </Item>
      <Item style={{ marginTop: 20 }}>
            <Input
            onChangeText={(price) => this.setState({ price })}
            value={this.state.price} />
      </Item>
      <Button block
            //onPress={() => { Actions.addmenu(); }}
            style={{ marginTop: 40, marginBottom: 30, backgroundColor: '#F6B749' }} >
            <Text>Add This Topping</Text>
      </Button>
      </View>
      </Container>
    );
  }
}
