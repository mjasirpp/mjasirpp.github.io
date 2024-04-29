import React,{useState} from 'react'    //use , for multiple import

function Counter() {
    const [state,setState]= useState(0)
  return (
    <div>
        <button onClick={()=>setState(state+1)}>Increment</button>   {/* incrementing number is updating */}
        <h1>This is Counter component: {state}</h1>
    </div>
  )
}

export default Counter