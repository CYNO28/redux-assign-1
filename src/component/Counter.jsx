import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../style/style.module.css";
const Counter = () => {
  const ref = useRef(1);
  const dispatch = useDispatch(0);
  const count = useSelector((state) => state.count);

  return (
    <div className={style.container}>
      <h1 style={{maxWidth:'90%',}}>  Ans  :<br></br>  {count}  <br /></h1>
      <br />
      <input className={style.topinput}type="text" ref={ref} placeholder="PUT VALUE HERE" />
     <div className={style.counter}>
     <button
        onClick={() =>
          dispatch({ type: "INCREMENT", payload: Number(ref.current.value) })
        }
      >
        INCREMENT
      </button>
      <button
        onClick={() =>
          dispatch({ type: "DECREMENT", payload: ref.current.value })
        }
      >
        DECREMENT
      </button>
     </div>

     <div className={style.flex}>
      <div>
      <button style={{borderRadius:'0px',padding:'20px',margin:'10px'}}
        onClick={() => {
          dispatch({ type: "reset" });
          ref.current.value = null;
        }}
      >
        X
      </button>
      </div>
      <div className={style.innergrid}>
      <button
        onClick={() => dispatch({ type: "add", payload: ref.current.value })}
      >
        add
      </button>
      <button
        onClick={() =>
          dispatch({ type: "multiply", payload: ref.current.value })
        }
      >
        multiply
      </button>
      <button
        onClick={() => dispatch({ type: "sub", payload: ref.current.value })}
      >
        substract
      </button>
      <button
        onClick={() => dispatch({ type: "divide", payload: ref.current.value })}
      >
        divide
      </button>
      </div>
      </div>
    </div>
  );
};

export default Counter;
