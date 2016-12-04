import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'

import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from '../components/Input'
import List from '../components/List'

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

  onAddItem = (text) => {
    const {dispatch} = this.props;

    dispatch(actionCreators.addItem(text));
  }

  onRemoveItem = (index) => {
    const {dispatch} = this.props;

    dispatch(actionCreators.removeItem(index));
  }

  onCompleteItem = (index) => {
    const {dispatch} = this.props;

    dispatch(actionCreators.toggleItemCompleted(index));
  }

  onRemoveCompleted = () => {
    const {dispatch} = this.props;

    dispatch(actionCreators.removeCompletedItems());
  }
  render() {
    const {items} = this.props;

    return (
      <View style={styles.container}>
        <Title>ToDo App</Title>
        <Input placeholder="Enter new task" onSubmit={this.onAddItem}/>
        <List items={items} onToggleCheckbox={this.onCompleteItem} onPressRemove={this.onRemoveItem}/>
        <Footer onPress={this.onRemoveCompleted}>Remove completed items</Footer>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
