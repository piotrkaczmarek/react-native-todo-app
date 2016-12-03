import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: 'papayawhip',
    borderStyle: 'solid',
    borderWidth: 2
  }
})

export default class Input extends Component {
  state = {
    value: ''
  }

  onChangeText = (value) => {
    this.setState({value});
  }

  render() {
    const {value} = this.state;
    const {placeholder} = this.props;

    return (
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
      />
    )
  }
}
