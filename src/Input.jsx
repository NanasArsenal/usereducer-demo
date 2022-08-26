import React, {useReducer} from 'react'

//this is the reducer 
function UserInputReducer(state,action){
    switch(action.type){
        case 'userinput':
            return{
                ...state, userinput: action.payload.value
            }
        default :
            return {}    
    }
}




const Input = () => {
  const [state, dispatch] = useReducer(UserInputReducer, {userinput: ""})

  function handleChange(e){
    dispatch({
        type:'userinput',
        payload: {value:e.target.value}
    })
  }

  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <h1>{state.userinput}</h1>
    </div>
  )
}

export default Input