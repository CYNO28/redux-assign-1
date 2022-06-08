import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const ref=useRef(1)
    const dispatch =useDispatch(0)
     const count=useSelector(state=>state.count)

  return (
    <div>Counter:{count}
    <br />
    <input type="text" ref={ref} placeholder='PUT VALUE HERE' />
    <button onClick={()=>dispatch({type:'INCREMENT',payload:Number(ref.current.value)})}>INCREMENT</button>
    <button onClick={()=>dispatch({type:'DECREMENT',payload:ref.current.value})}>DECREMENT</button>
    <button onClick={()=>dispatch({type:'add',payload:ref.current.value})}>add</button>
    <button onClick={()=>dispatch({type:'multiply',payload:ref.current.value})}>multiply</button>
    <button onClick={()=>dispatch({type:'sub',payload:ref.current.value})}>substract</button>
    <button onClick={()=>dispatch({type:'divide',payload:ref.current.value})}>divide</button>
    <button onClick={()=>{dispatch({type:'reset'})
  ref.current.value=null}}>X</button>
    </div>
  )
}

export default Counter