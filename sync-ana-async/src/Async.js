import React, { useState } from "react";

const Async = () => {
  // const [state,setState] = useState("");
  //  function first(){
  //         return "first";
  // }

  // function setTimeIntervals(){
  //     console.log("After 2s");
  // }
  // function setFunction (){
  //     if(true){
  //         setTimeout(setTimeIntervals,2000);
  //     }
  // }
  // let setFun
  //  async function third(){
  //     console.log("hi1")
  //    setFun = setFunction()
  //    console.log(setFun,"setFun")
  //    console.log("hii2")
  //     return "third"
  // }
  // function second(){
  //     return "second"
  // }
  // console.log(first(),"first");

  //  console.log(third(),"third")
  //  console.log(second(),"second")
  const reachA = new Promise((resolve, reject) => {
    const reached = true;
    if (reached) {
      setTimeout(() => resolve("Reached"), 2000);
    } else {
      reject("not reached");
    }
  });

  async function fun() {
    console.log("first");
    const res = await reachA
    //   .then((res) => console.log(res, "res1"))
    //   .catch((msg) => console.log(msg, "reachedStatus"));
    console.log(res, "res");
    console.log("second");
  }

  fun();

  return <div></div>;
};
// function handelChange(e){
//   setUser((user) => ({
//     ...user,
//     [e.target.name] : e.target.value
//   }))
// }

export default Async;
