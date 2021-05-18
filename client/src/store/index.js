import {
    createStore,
    applyMiddleware
  } from 'redux'
  import thunk from 'redux-thunk'
  import logger from './middlewares/logger'
  import { r_customer} from './reducers'
  
  const store = createStore(
    r_customer,
    applyMiddleware(logger, thunk)
  )
  
  export default store