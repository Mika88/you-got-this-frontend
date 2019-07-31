function stepsReducer(state = [], action) {
    switch(action.type) {
      case 'ADD_STEP':
        return [...state, action.step]
      case 'FETCH_STEPS':
        return action.steps
      case 'DELETE_STEP':
        return [...state.filter(step => step.id !== action.step.id)]
      case 'UPDATE_STEP':
        const step = state.find(step => step.id === action.step.id)
        const index = state.indexOf(step)
        const newState = [...state]
          newState.splice(index, 1, action.step)
        return newState
      default:
        return state;
      }
  }

export default stepsReducer;