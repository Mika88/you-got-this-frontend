function eventsReducer(state = [], action) {
  console.log(state)
    switch(action.type) {
      case 'ADD_EVENT':
        return [...state, action.event]
      case 'FETCH_EVENTS':
        return action.events
      case 'DELETE_EVENT':
        return [...state.filter(event => event.id !== action.event.id)]
      case 'UPDATE_EVENT':
        const event = state.find(event => event.id === action.event.id)
        const index = state.indexof(event)
        return [ ...state.splice(index, 1, action.event) ]
      default:
        return state;
      }
  }

export default eventsReducer;