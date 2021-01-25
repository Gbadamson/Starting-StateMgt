import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const HeadFile = () => {
  return (
    <div>
      <div
        style={{
          height: "60px",
          backgroundColor: "darkred",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Link to="/count">
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            COUNTER
          </div>
        </Link>
        <Link to="/quotables">
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            QUOTES
          </div>
        </Link>
        <Link to="/state">
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            STATE MANAGEMENT
          </div>
        </Link>
        <Button>Not Amazed yet?</Button>
      </div>
    </div>
  );
};

export default HeadFile;
