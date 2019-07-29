function goalsReducer(state = [], action) {
    switch(action.type) {
      case 'FETCH_GOALS':
        return action.goals;
      case 'ADD_GOAL':
        return [...state, action.goal ]
      case 'DELETE_GOAL':
        return [...state.filter(goal => goal.id !== action.goal.id)]
      default:
        return state;
      }
  }

export default goalsReducer;