function stepsReducer(state = [], action) {
    switch(action.type) {
      case 'ADD_STEP':
        return [...state, action.step]
      case 'FETCH_STEPS':
        return action.steps
      default:
        return state;
      }
  }

export default stepsReducer;