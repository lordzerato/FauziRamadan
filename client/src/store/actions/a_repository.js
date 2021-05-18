function fetchBegin() {
  return {
    type: "fetchBegin"
  }
}

function fetchFailed(err) {
  return {
    type: "fetchFailed",
    payload: err
  }
}

function fetchDone(data) {
  return {
    type: "fetchDone",
    payload: data
  }
}

export default function tryFetch(username) {
  return async (dispatch) => {
    try {
      dispatch(fetchBegin())

      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      const json = await response.json()
      console.log(json);
      
      if (json.error) dispatch(fetchFailed(json.error))
      else dispatch(fetchDone(json))
    } catch (error) {
      dispatch(fetchFailed(error))
    }
  }
}