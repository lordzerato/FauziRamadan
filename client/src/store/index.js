import {
    createStore,
    applyMiddleware
  } from 'redux'
  import thunk from 'redux-thunk'
  import logger from './middlewares/logger'
  import r_repository from './reducers/r_repository'

  const store = createStore(
    r_repository,
    applyMiddleware(logger, thunk)
  )
  
  export default store