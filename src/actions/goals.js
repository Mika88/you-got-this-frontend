const apiUrl = 'http://localhost:3001/api/v1/goals'

const postGoal = () => {
  fetch(apiUrl, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(this.state) 
    })
}

export function fetchGoals() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch(apiUrl)
      .then(response => response.json())
      .then(goals => dispatch({ type: 'FETCH_GOALS', goals }));
  };
}

export function addGoal() {
  return (dispatch) => {
    dispatch({ type: 'LOADING'});
    return postGoal()
    .then(res => res.json())
    .then(goal => dispatch({ type: 'ADD_GOAL', goal}))
  } 
}