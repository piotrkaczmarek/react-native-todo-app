import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 12,
    height: 24,
    width: 24
  },
  unchecked: {
  },
  checked: {
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 8,
    height: 16,
    width: 16
  }
})

export default class Checkbox extends Component {
  render() {
    const {onPress, isChecked} = this.props;
    const checkboxStyle = isChecked ? styles.checked: styles.unchecked;

    return (
      <TouchableOpacity style={styles.box} onPress={onPress}>
        <View style={checkboxStyle}/>
      </TouchableOpacity>
    )
  }
}
