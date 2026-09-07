// import React,{useRef} from 'react'

// const UserRef = () => {
//     let count = useRef()
//     const onClickHandler =()=>{
//         count.current.innerText = 'Hello'
//         console.log(count.current)
//     }
//   return (
//     <div>
//       <h1 ref={count}>{count.current}</h1>
//       <button onClick = {onClickHandler}>Click me</button>
//     </div>
//   )
// }

// export default UserRef


// import React, { useRef } from 'react'

// const UserRef = () => {
//     const fileRef = useRef()
//   return (
//     <div>
//       <input type="file" ref={fileRef}/>
//       <div style={{background:'red',width:'2rem',height:'2rem'}} onClick={()=>fileRef.current.click()}></div>
//     </div>
//   )
// }

// export default UserRef

import React,{useRef} from 'react'

const UserRef = () => {
    let count = useRef(0)
    const onClickHandler =()=>{
        count.current+=1
        console.log(count.current)
    }
  return (
    <div>
      <h1 ref={count}>{count.current}</h1>
      <button onClick = {onClickHandler}>Click me</button>
    </div>
  )
}

export default UserRef
