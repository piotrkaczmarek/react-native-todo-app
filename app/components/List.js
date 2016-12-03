import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightblue',
    padding: 5,
    marginBottom: 5
  }
})

export default class List extends Component {
  renderItem = (item, index) => {
    return (
      <TouchableOpacity style={styles.item} key={index}>
        <Text>{item}</Text>
      </TouchableOpacity>
    )
  }


  render() {
    const {items} = this.props;

    return (
      <ScrollView>
        {items.map(this.renderItem)}
      </ScrollView>
    )
  }
}
