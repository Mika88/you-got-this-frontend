function eventsReducer(state = [], action) {
    switch(action.type) {
      case 'ADD_EVENT':
        return [...state, action.event]
      case 'FETCH_EVENTS':
        return action.events
      default:
        return state;
      }
  }

export default eventsReducer;