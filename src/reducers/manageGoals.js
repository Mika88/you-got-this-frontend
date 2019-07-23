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
      case 'ADD_GOAL':
        return {
          ...state,
          loading: false,
          goals: [...state.goals, action.goal]
        }
      default:
        return state;
      }
  }

export default goalsReducer;