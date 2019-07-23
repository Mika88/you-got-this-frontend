function goalsReducer(state = {
  goals: [],
  loading: false }, action) {
    switch(action.type) {
      case 'LOADING':
      return {
        ...state, 
          loading: true
        }
      case 'FETCH_GOALS':
        return {
          ...state,
            loading: false,
            goals: action.goals
          }
      default:
        return state;
      }
  }

export default goalsReducer;