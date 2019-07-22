function goalsReducer(state = {
  goals: [],
  loading: false }, action) {
  switch(action.type) {
      case "ADD_GOAL":
        return { ...state, 
          goals: [...state.goals, action.text]
        };
      default:
        return state;
  }
}

export default goalsReducer;