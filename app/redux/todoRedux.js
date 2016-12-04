const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
  REMOVE_COMPLETED_ITEMS: 'REMOVE_COMPLETED_ITEMS'
}

export const actionCreators = {
  addItem: (item) => {
    return {type: types.ADD_ITEM, payload: item}
  },
  removeItem: (index) => {
    return {type: types.REMOVE_ITEM, payload: index}
  },
  toggleItemCompleted: (index) => {
    return {type: types.TOGGLE_ITEM_COMPLETED, payload: index}
  },
  removeCompletedItems: () => {
    return {type: types.REMOVE_COMPLETED_ITEMS}
  }
}

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action
  const {items} = state

  switch(type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [{title: payload, completed: false}, ...items]
      }
    }
    case types.REMOVE_ITEM: {
      return {
        ...state,
        items: items.filter((item, index) => index != payload)
      }
    }
    case types.TOGGLE_ITEM_COMPLETED: {
      return {
        ...state,
        items: items.map((item, index) => {
          if (index == payload) {
            return {title: item.title, completed: !item.completed}
          }
          return item;
        })
      }
    }
    case types.REMOVE_COMPLETED_ITEMS: {
      return {
        ...state,
        items: items.filter((item) => !item.completed)
      }
    }
    default: {
      return state
    }
  }
}
