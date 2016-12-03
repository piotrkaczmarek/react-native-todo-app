import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'

import Title from '../components/Title'
import Footer from '../components/Footer'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>ToDo App</Title>
        <ScrollView></ScrollView>
        <Footer>Remove completed items</Footer>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
