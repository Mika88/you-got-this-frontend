function goalsReducer(state = [], action) {
  switch(action.type) {
      case "ADD_GOAL":
        return [...state, action.goal];
      default:
        return state;
  }
}

export default goalsReducer;