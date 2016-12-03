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

  onSubmitEditing = () => {
    const {onSubmit} = this.props;
    const {value} = this.state;

    if (!value) return;

    onSubmit(value);
    this.setState({value: ''});
  }

  render() {
    const {value} = this.state;
    const {placeholder, onSubmitEditing} = this.props;

    return (
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}
