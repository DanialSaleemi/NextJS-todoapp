"use client";
import React, {useState} from "react";

export default function CounterApp () {
        const [val, setVal] = useState(0);
        const onChangeHandler = (e: any) => {
            console.log('e is', e.target.value);
            setVal(e.target.value);
        }
        const onClickHandler = () => {
            setVal(val-1);
        }
        const onClickHandler1 = () => {
            setVal(val+1);
        }

        
  return (
  <>

  <input type= "text" value={val} onChange={onChangeHandler}/>;

  <button onClick={onClickHandler}>Decrement</button>;
  <button onClick={onClickHandler1}>Increment</button>;
  
  </>
  );
        
    }