const logger = (store) => (next) => (action) => {
    console.log(
      "req action: ",
      action,
      store.getState()
    )
  
    next(action)
  
    console.log(
      "res action: ",
      action,
      store.getState()
    )
  }
  
  export default logger