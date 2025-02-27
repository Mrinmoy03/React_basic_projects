import { useReducer } from "react"
import { counterReducer, counterState } from "../Reducer/CounterReducer"


const initialState : counterState = {count:0}

export const Counter = () => {
   const [state, dispatch] = useReducer(counterReducer, initialState)

   const increment = ()=>dispatch({
       type:"INCREMENT"
   })
   const decrement = ()=>dispatch({
       type:"DECREMENT"
   })
  return (
    <div>
        <h2>count : {state.count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
