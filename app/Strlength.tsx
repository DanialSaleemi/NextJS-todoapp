"use client";

import { useState } from "react";

export default function StrLength() {
  const [val, setVal] = useState("Hello");
  const [val1, setVal1] = useState("World");
  const onChangeHandler  = (e: any) => {
    console.log("e is ", e.target.value);
    setVal(e.target.value);

  }
  const onChangeHandler1  = (e: any) => {
    console.log("e is ", e.target.value);
    setVal1(e.target.value);

  }

  return <>
  <input type = "text" value = {val} onChange = {onChangeHandler}/>;
  <br/> 
  <input type = "text" value = {val1} onChange = {onChangeHandler1}/>;
  <br/>
  Length of string 1 is: {val.length};
  <br/>
  Length of string 2 is: {val1.length};
  </>;
}