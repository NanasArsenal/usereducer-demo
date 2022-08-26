import  {useReducer} from 'react'


const FormReducer = (state,action)=>{
    switch(action.type){
        case 'INPUT':
            return {...state,input: action.payload.value}

        default:
            return{}
    }
}


export const Form = ()=>{

    const [state, dispatch] = useReducer(FormReducer, {input:""}/*INITIAL STATE*/) ///input state

    function handlechange(e){
        dispatch({
            type:'INPUT',
            payload: {value: e.target.value}
        })
    }
 
    return(
      <form action="">
        <input type="text" onChange={handlechange}/>
        <span>{state.input} </span>
      </form>
    )
  }