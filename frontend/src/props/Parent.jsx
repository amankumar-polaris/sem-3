import React from 'react'
import Child from './Child'

const Parent = () => {
    const myName = "Aman"
  return (
    <div>
      <Child myName = {myName} id = '1234'/>
    </div>
  )
}

export default Parent
