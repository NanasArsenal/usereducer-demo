import React,{useReducer} from 'react'


function CounterReducer(state,action){
    switch(action.type){
        case 'increment':
            return{...state, count: state.count +1 }

        case 'decrement':
            return{...state, count: state.count - 1}

        default:
            return {}
    }
}

const Counter = () => {
   const [state, dispatch] = useReducer(CounterReducer, {count:0})

   function handleIncrease(e){
        dispatch({
            type: 'increment'
        })
   }

   function handleDecrease(e){
        dispatch({
            type:'decrement'
        })
   }

  return (
    <div>
        <button onClick={handleDecrease}>-</button>
        <h1>{state.count} </h1>
        <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Counter