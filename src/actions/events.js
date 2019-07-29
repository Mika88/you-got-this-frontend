const apiUrl = 'http://localhost:3001/api/v1/events'

export function fetchEvents() {
    return (dispatch) => {
      dispatch({ type: 'LOADING' });
      return fetch(apiUrl)
        .then(response => response.json())
        .then(events => dispatch({ type: 'FETCH_EVENTS', events }));
    };
  }

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

  export function deleteEvent(data, id) {
    return (dispatch) => {
      dispatch({ type: 'LOADING'});
      return fetch(apiUrl + "/" + id, {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data) 
      })
      .then(res => res.json())
      .then(event => dispatch({type: 'DELETE_EVENT', event}))
    } 
  }

  export function updateEvent(data, id) {
    return (dispatch) => {
      dispatch({ type: 'LOADING'});
      return fetch(apiUrl + "/" + id, {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data) 
      })
      .then(res => res.json())
      .then(event => dispatch({type: 'UPDATE_EVENT', event}))
    } 
  }
