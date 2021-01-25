import HeadFile from "./HeadFile";
import React, { useState, useEffect } from "react";
import { Button } from "antd";

const Countable = () => {
  const [plant, setPlant] = useState(0);
  const [count, setCount] = useState(false);

  useEffect(() => {
    const realNum = parseInt(plant);

    if (plant > 0 && count) {
      setTimeout(() => {
        setPlant(realNum - 1);
      }, 1000);
    } else if (plant == 0 && count) {
      alert("Your time is up!!!");
    }
  }, [count, plant]);
  return (
    <div>
      <HeadFile />
      <center>
        <div>
          <form>
            <input
              // disabled="!count"
              type="Number"
              value={plant}
              onChange={(e) => {
                setPlant(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                setCount(true);
              }}
            >
              Enter
            </Button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Countable;
