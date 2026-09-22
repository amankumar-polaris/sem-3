import React, { lazy, Suspense } from 'react'
// import LazyChildComponent from './ChildComponent'

const LazyParent = () => {
    const LazyChildComponent = lazy(()=>import('./ChildComponent'))
  return (
    <div>
      <h1>This is a parent component</h1>
      <Suspense fallback = {<div>...Loading</div>}>

      <LazyChildComponent/>
      </Suspense>
      {/* <LazyC÷hildComponent/> */}
      <h2>this is another piece of code</h2>
    </div>
  )
}

export default LazyParent
