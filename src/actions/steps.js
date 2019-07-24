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
    .then(step => dispatch({type: 'ADD_STEP', step}))
  } 
}

