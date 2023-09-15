import React, {useReducer, useState } from "react";
const ACTION = {
  ADD_TODO: "add-doto",
  TOGGLE: "list-toggle",
  DELETE: "list-delete",
};

function newTodo(name) {
  return { id: Date.now(), name, Complete: "false" };
}
const Reducer = () => {
  const [Toggele, setToggle] = useState({
    id: "",
    toggleId: "",
  });
  const reducer = (todos, action) => {
    console.log(action, "action");
    switch (action.type) {
      case ACTION.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
        case ACTION.DELETE:
         return todos.filter((user) => {
           return user.id !== action.payload.id;
         });
      case ACTION.TOGGLE:
        todos.map((todo) => {
          if (todo.id === action.payload.id) {
            setToggle({
              id: action.payload.id,
              toggleId: !Toggele.toggleId,
            });
          }
        });
     
      default:
        return todos;
    }
  };

  const [todos, dispatch] = useReducer(reducer,[]);
  const [Name, setName] = useState("");

  const handelClick = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: Name } });
  };
  console.log(todos);
  return (
    <div>
      <form onSubmit={handelClick}>
        <input
          style={{ height: "2rem", width: "10rem" }}
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((user) => {
        return (
          <div key={user.id}>
            <span> Id: {user.id} </span>
            <span
              style={
                Toggele.id === user.id && Toggele.toggleId === true
                  ? { color: "black" }
                  : { color: "gray" }
              }
            >
              {" "}
              Name: {user.name}{" "}
            </span>
            <span> Complete: {user.Complete} </span>
            <button
              onClick={() =>
                dispatch({ type: ACTION.TOGGLE, payload: { id: user.id } })
              }
            >
              Toggle
            </button>
            <button
              onClick={() =>
                dispatch({ type: ACTION.DELETE, payload: { id: user.id } })
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Reducer;
