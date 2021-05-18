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
      <h3 class="text-center mt-5">GitHub API</h3>
      <form id="gitHubForm" class="form-inline mx-auto">
        <input class="form-control mb-5 ml-5" type="text" placeholder="GitHub Username"
         onChange={ handleChange }/>
        <input type="button" class="btn btn-primary ml-2 mb-5" value="Submit"
         onClick={ getResponse }/>
      </form>
    </>
  )
}