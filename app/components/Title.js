import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'lightgreen',
    padding: 15
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
})

export default class Title extends Component {
  render() {
    const {children} = this.props;

    return (
      <View style={styles.view}>
        <Text style={styles.text}>{children}</Text>
      </View>
    )
  }
}
