import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightblue',
    padding: 5,
    marginBottom: 5,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row'
  }
})

export default class List extends Component {
  renderItem = (item, index) => {
    const {onToggleCheckbox} = this.props;

    return (
      <View key={index} style={styles.item}>
        <TouchableOpacity >
          <Text>{item.title}</Text>
        </TouchableOpacity>
        <Checkbox isChecked={item.completed} onPress={() => onToggleCheckbox(index)} />
      </View>
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
