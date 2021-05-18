import React from 'react'
import { RepoForm, RepoCards } from '../components/index'
import { useSelector } from 'react-redux'

export default function TheHome() {
  const { repositories, error, loading } = useSelector((state) => state)

  return (
    <>
      <RepoForm/>
      <div className="justify-content-center mt-2"
        style={{
        display: "flex",
        flexWrap: "wrap"
       }}>
         {
           repositories.length < 1? 
           <h2>Please, enter Github username first!</h2> :
           repositories.map(el => {
             return <RepoCards key={el.id} repo={el}/>
           })
         }
      </div>
    </>
  )
}