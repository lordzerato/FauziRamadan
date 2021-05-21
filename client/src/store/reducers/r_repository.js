const initialState = {
  repositories: [],
  error: false,
  loading: false
}

const r_repository = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "fetchBegin":
      return {
        ...state,
        loading: true,
        repositories: []
      }
    case "fetchDone":
      return {
        ...state,
        repositories: payload,
        loading: false
      }
    case "fetchFailed":
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state
  }
}

export default r_repository