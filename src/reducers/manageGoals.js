function goalsReducer(state = {
  goals: [],
  }, action) {
    switch(action.type) {
      case 'FETCH_GOALS':
        return {
          ...state,
            goals: action.goals
          }
      case 'ADD_GOAL':
        return {
          ...state,
          goals: [...state.goals, action.goal]
        }
      default:
        return state;
      }
  }

export default goalsReducer;