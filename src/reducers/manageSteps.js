function stepsReducer(state = [], action) {
    switch(action.type) {
      case 'ADD_STEP':
        return [...state, action.step]
      case 'FETCH_STEPS':
        return action.steps
      case 'DELETE_STEP':
        return [...state.filter(step => step.id !== action.step.id)]
      default:
        return state;
      }
  }

export default stepsReducer;