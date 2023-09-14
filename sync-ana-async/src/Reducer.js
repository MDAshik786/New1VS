import React, { useReducer, useState } from 'react'
const ACTION =  {
   ADD_TODO: 'add-doto'
}
const reducer = (state,action) => {
    console.log(action,"action")
 switch(action.tye){
    case ACTION.ADD_TODO:
        return [...state, newTodo(action.payload.name)]
 }

}
function newTodo(name){
   return {id:Date.now, name, Complete:false}
}
const Reducer = () => {
    const [todos , dispatch] = useReducer(reducer,[])
    const [Name, setName] = useState('');

const handelClick = (e) => {
   e.preventDefault();
   dispatch({type:ACTION.ADD_TODO,payload:{name : Name} })
}
  return (
    <div>
        <form onSubmit={handelClick}>
          <input style={{height:"2rem",width:"10rem"}} type='text' value={Name} onChange={e => setName(e.target.value)}/>
        </form>
    </div>
  )
}

export default Reducer