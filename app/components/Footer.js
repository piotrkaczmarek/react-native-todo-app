import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: 'pink',
    padding: 15
  },
  text: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold'
  }
})

export default class Footer extends Component {
  render() {
    const {children, onPress} = this.props;

    return (
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <Text style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}
