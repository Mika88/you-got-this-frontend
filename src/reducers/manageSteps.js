function stepsReducer(state = {
  steps: [],
  loading: false }, action) {
    switch(action.type) {
      case 'LOADING':
      return {
        ...state, 
          loading: true
        }
      case 'ADD_GOAL':
        return {
          ...state,
          loading: false,
          sreps: [...state.steps, action.step]
        }
      default:
        return state;
      }
  }

export default stepsReducer;