import React, { Component } from 'react'
import {
  View, Image, StyleSheet, FlatList
} from 'react-native';
import styles from './styles';
export class HomeScreen extends Component {

 onPressItem(item) { }

 renderItem(item) {
  return (
      <TouchableOpacity
          style={styles.item}
          onPress={() => this.onPressItem(item)}>
          <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
  )
}
 render() {
  return (
   <FlatList
    data={this.state.listData}
    renderItem={({ item }) => this.renderItem(item)}
    keyExtractor={(item, index) => index.toString()} />
  )
 }
}