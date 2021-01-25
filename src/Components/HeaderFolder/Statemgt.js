import { Button } from "antd";
import React, { useState, useReducer } from "react";
import HeadFile from "./HeadFile";

const initState = {
  counting: 20,
};
const AppReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        counting: state.counting + 1,
      };
    case "DECREASE":
      return {
        counting: state.counting - 1,
      };
    case "ADD_VALUE":
      return {
        counting: action.payload,
      };
    default:
      return state;
  }
};

const Statemgt = () => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  const [counting, setCounting] = useState(0);
  const [counter, setCounter] = useState(0);
  const Add = () => {
    setCounter(counter + 1);
  };
  const Minus = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <div>
        <HeadFile />
        <center>
          <div>
            <form>
              <input
                type="text"
                value={counter}
                onChange={(e) => {
                  setCounter(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  dispatch({ type: "ADD_VALUE", payload: parseInt(counter) });
                }}
              >
                Enter
              </Button>
            </form>
            <div
              style={{
                marginTop: "50px",
                backgroundColor: "brown",
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              {state.counting}
            </div>
            <div
              style={{
                marginTop: "50px",
                display: "flex",
                width: "150px",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                onClick={() =>
                  dispatch({
                    type: "DECREASE",
                  })
                }
              >
                -
              </Button>
              <Button
                onClick={() =>
                  dispatch({
                    type: "INCREASE",
                  })
                }
              >
                +
              </Button>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Statemgt;
