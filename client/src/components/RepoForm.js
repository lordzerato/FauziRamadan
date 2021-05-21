import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import tryFetch from '../store/actions/a_repository'

export default function RepoForm() {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  const getResponse = (event) => {
    event.preventDefault()
    dispatch(tryFetch(username))
  }

  return (
    <>
      <h3 className="text-center mt-5">GitHub API</h3>
      <form id="gitHubForm" className="form-inline">
        <div class="form-group mx-auto">
          <input className="form-control mb-3" type="text" placeholder="GitHub Username"
          onChange={ handleChange }/>
          <input type="button" className="btn btn-primary ml-2 mb-3" value="Submit"
          onClick={ getResponse }/>
         </div>
      </form>
    </>
  )
}