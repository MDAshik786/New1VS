import React, { useReducer, useState } from 'react'
const ACTION =  {
   ADD_TODO: 'add-todo'
}
const reducer = (todo,action) => {
    console.log(action,"action")
 switch(action.type){
    case ACTION.ADD_TODO:
        return [...todo, newTodo(action.payload.name)]
   default:
      return todo
 }

}
function newTodo(name){
   return {id:Date.now(), name, Complete:false}
}
const Reducer = () => {
    const [todos , dispatch] = useReducer(reducer,[])
    const [Name, setName] = useState('');

const handelClick = (e) => {
   e.preventDefault();
   dispatch({type:ACTION.ADD_TODO,payload:{name : Name} })
}
console.log(todos,"todo")
  return (
    <div>
        <form onSubmit={handelClick}>
          <input style={{height:"2rem",width:"10rem"}} type='text' value={Name} onChange={e => setName(e.target.value)}/>
        </form>
         {todos.map((user) => {
            return(
               <div key={user.id} >
           <span>Id : {user.id} </span>
           <span>Name : {user.name} </span> 
           <span>Complete : {user.Complete} </span>
        </div>
            )
         })
         }
    </div>
  )
}

export default Reducer