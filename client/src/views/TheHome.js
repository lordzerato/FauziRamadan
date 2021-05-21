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
           error? <h2 className="text-center mt-5"> { error } </h2> :
           loading? <h2 className="text-center mt-5"> Loading </h2> :
           repositories.length < 1? 
           <h2 className="text-center mt-5">Please, enter Github username first!</h2> :
           repositories.length = 1? <RepoCards key="01" repo={repositories}/> :
           repositories.map(el => {
             return <RepoCards key={el.id} repo={el}/>
           })
         }
      </div>
    </>
  )
}