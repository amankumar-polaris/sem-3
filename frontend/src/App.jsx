import React,{useState,useEffect,useRef} from 'react'
import UserRef from './UserRef'
import Parent from './props/Parent'
import A from './ContextApi/A'

// const App = () => {
//   // let count = 0
//   const[count,setCount] = useState(0)
//   // setCount(1)

//   // const handleClick = ()=>{setCount(prev=>prev+1)
//   //   console.log(count)
//   // }
//   setCount(prev=>prev+1)

//   // console.log(count,'count') //0=>8,1=>2
//   return (
//     <div>
//       <h1>{count}</h1> 
//       {/* 0=>9, 1=>0 */}
//       {/* <button onClick = {handleClick}>click me</button> */}
//     </div>
//   )
// }

// export default App

// const App = () => {
//   const[count,setCount] = useState(0)
//   const[value,setValue] = useState(0)
//   useEffect(()=>{
//     console.log(count,'count')
//     console.log(value,'value')
//   },[count])
  
//   return (
//     <div>
//       {/* <h1>{count}</h1> */}
//       <button onClick={()=>setCount(prev=>prev+1)}>Count</button>
//       <button onClick={()=>setValue(prev=>prev+1)}>Value</button>
//     </div>
//   )
// }

// export default App



// const App = () => {
//   const inputRef = useRef(null)

//   const handleInput = ()=>{
//     inputRef.current.focus=true

//   }
//   return (
//     <div>
//       <input type="text" onChange = {handleInput} ref = {inputRef}/>
//     </div>
//   )
// }

// export default App






const App = () => {
  return (
    <div>
      <UserRef/>
      {/* <Parent/> */}
      {/* <A/> */}
    </div>
  )
}

export default App



