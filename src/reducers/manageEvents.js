function eventsReducer(state = [], action) {
    switch(action.type) {
      case 'ADD_EVENT':
        return [...state, action.event]
      default:
        return state;
      }
  }

export default eventsReducer;