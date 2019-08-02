const apiUrl = 'http://localhost:3001/api/v1/steps'

export function fetchSteps() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch(apiUrl)
      .then(response => response.json())
      .then(steps => dispatch({ type: 'FETCH_STEPS', steps }));
  };
}

export function addStep(data) {
  return (dispatch) => {
    dispatch({ type: 'LOADING'});
    return fetch(apiUrl, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data) 
    })
    .then(res => res.json())
    .then(step => !step.errors ? dispatch({type: 'ADD_STEP', step}) : alert("A step must have a title"))
  } 
}

export function deleteStep(data, id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING'});
    return fetch(apiUrl + "/" + id, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data) 
    })
    .then(res => res.json())
    .then(step => dispatch({type: 'DELETE_STEP', step}))
  } 
}

export function updateStep(data, id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING'});
    return fetch(apiUrl + "/" + id, {
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data) 
    })
    .then(res => res.json())
    .then(step => dispatch({type: 'UPDATE_STEP', step}))
  } 
}
