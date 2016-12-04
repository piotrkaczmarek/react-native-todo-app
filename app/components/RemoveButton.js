import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 2,
    backgroundColor: 'pink',
    height: 24,
    width: 24
  }
})

export default class RemoveButton extends Component {
  render() {
    const {onPress} = this.props;

    return (
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <Text>x</Text>
      </TouchableOpacity>
    )
  }
}
