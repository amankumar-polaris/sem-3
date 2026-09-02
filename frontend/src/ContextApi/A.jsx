import React, { createContext } from 'react'
import B from './B'

export const userContext = createContext()
const A = () => {
    const user = 'xyz'
  return (
    <userContext.Provider value = {user}>
      <B/>
    </userContext.Provider>
  )
}

export default A
