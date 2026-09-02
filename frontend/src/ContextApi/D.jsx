import React, { useContext } from 'react'
import { userContext } from './A'

const D = () => {
    const user = useContext(userContext)
    console.log(user)
  return (
    <div>
      
    </div>
  )
}

export default D
