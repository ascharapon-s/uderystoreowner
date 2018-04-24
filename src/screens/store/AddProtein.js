import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Container, Header, Content, Input, Item, View, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'ชื่อเนื้อสัตว์', price: 'ราคา' };
  }

  addProteinItem() {
    fetch('http://35.185.182.152:3000/api/stores/5adee4b49bbb3628a48609e4/proteinitems', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
      }),
    });
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
            // onPress={() => { this.addProteinItem(); Actions.menu(); }}
            style={{ marginTop: 40, marginBottom: 30, backgroundColor: '#F6B749' }} >
            <Text>Add This Protein</Text>
      </Button>
      </View>
      </Container>
    );
  }
}
