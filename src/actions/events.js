const apiUrl = 'http://localhost:3001/api/v1/events'

export function addEvent(data) {
    return (dispatch) => {
      dispatch({ type: 'LOADING'});
      return fetch(apiUrl, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data) 
      })
      .then(res => res.json())
      .then(event => dispatch({type: 'ADD_EVENT', event}))
    } 
  }