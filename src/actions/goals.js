export function fetchGoals() {
    return (dispatch) => {
      dispatch({ type: 'LOADING' });
      return fetch('http://localhost:3001/api/v1/goals')
        .then(response => response.json())
        .then(goals => dispatch({ type: 'FETCH_GOALS', goals }));
    };
  }
