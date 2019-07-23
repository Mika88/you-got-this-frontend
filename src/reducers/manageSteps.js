function stepsReducer(state = {
  steps: [],
  loading: false }, action) {
    switch(action.type) {
      case 'LOADING':
      return {
        ...state, 
          loading: true
        }
      case 'ADD_STEP':
        return {
          ...state,
          loading: false,
          steps: [...state.steps, action.step]
        }
      default:
        return state;
      }
  }

export default stepsReducer;