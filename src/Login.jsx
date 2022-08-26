import React,{useReducer} from 'react'

const INITIAL_STATE =  {username:"",password:""}

function LoginReducer(state,action){
    switch(action.type){
        case 'INPUT' :
            return {
                ...state, 
                [action.payload.name]: action.payload.value,
            }

        default:
            return {}
    }
}

const Login = () => {

    const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE)


    function handleChange(e){
        dispatch({
            type: 'INPUT',
            payload: {name:e.target.name,value:e.target.value}
        })


        console.log(INITIAL_STATE)

    }
  return (
    <div>
        Login form
        <form>
            <input type="text" name='username'  onChange={handleChange}/><span>{state.username} </span>
            <input type="text" name='password' onChange={handleChange}/><span>{state.password} </span>
        </form>

    </div>
  )
}

export default Login