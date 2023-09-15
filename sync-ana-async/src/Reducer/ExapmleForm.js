import React, { useReducer} from "react";
import {ACTION, InitialValue, formsReducer } from "./formReducer.js";


const ExapmleForm = () => {
  const [state, dispatch] = useReducer(formsReducer,InitialValue);
  const handelOnChange = (e) => {
    dispatch({
      type: ACTION.ADD_VALUE,
      payload: { name: e.target.name, value: e.target.value },
    });
  };
const decreaseValue = (e ) => {
    e.preventDefault()
    dispatch({type:ACTION.DECREASE})
}
const increaseValue =(e) => {
    e.preventDefault()
    dispatch({type:ACTION.INCREASE})
}
  console.log(state,"state");
  return (
    <>
      <form action="">
        <input
          type="text"
          onChange={handelOnChange}
          placeholder="Enter Email "
          name="email"
        />
        <input
          type="text"
          onChange={handelOnChange}
          placeholder="Enter Password"
          name="password"
        />
        <input
          type="text"
          onChange={handelOnChange}
          placeholder="Enter FirstName"
          name="firstname"
        />
        <input
          type="text"
          onChange={handelOnChange}
          placeholder="Enter LastName"
          name="lastname"
        />
        <select name="category" id="" onChange={handelOnChange}>
          <option value={"Dress"}> Dress</option>
          <option value={"Sneakers"}> Sneakers</option>
          <option value={"Watchs"}>Watches</option>
        </select>
        <button  onClick={decreaseValue} >-</button>
        <span>{state.quantity}</span>
        <button onClick={increaseValue}>+</button>
      </form>
    </>
  );
};

export default ExapmleForm;
