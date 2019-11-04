
const apiUrl = 'http://localhost:3001/api/v1/goals'

export function fetchGoals() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch(apiUrl)
      .then(response => response.json())
      .then(goals => dispatch({ type: 'FETCH_GOALS', goals }));
  };
}

export function addGoal(data) {
  return (dispatch) => {
    dispatch({ type: 'LOADING'});
    return fetch(apiUrl, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data) 
    })
    .then(res => res.json(data))
    .then(goal => !goal.errors ? dispatch({type: 'ADD_GOAL', goal}) : alert(goal.errors.message))
  } 
}

export function deleteGoal(data, id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING'});
    return fetch(apiUrl + "/" + id, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data) 
    })
    .then(res => res.json())
    .then(goal => dispatch({type: 'DELETE_GOAL', goal}))
  } 
}
