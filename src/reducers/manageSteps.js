function stepsReducer(state = [], action) {
    switch(action.type) {
      case 'ADD_STEP':
        return [...state, action.step]
        
      default:
        return state;
      }
  }

export default stepsReducer;