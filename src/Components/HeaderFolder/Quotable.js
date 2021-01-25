import React from "react";
import HeadFile from "./HeadFile";

const QuoteFile = [
  "To err is human, to forgive is divine",
  "The more you look the less you see",
  "There is no deity worthy of worship except God",
  "Never allow the door to close, even if you have to wedge your foot",
  "Be the change you want to see",
];

const Quotable = () => {
  const [quoted, setQuoted] = React.useState(0);
  return (
    <div>
      <HeadFile />
      <center>
        <div>This is a list of our quotes</div>
      </center>
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={() => {
            setQuoted(quoted + 1);
          }}
          style={{ fontWeight: "bold", fontSize: "25px", cursor: "pointer" }}
        >
          {QuoteFile[quoted % QuoteFile.length]}
        </div>
      </div>
    </div>
  );
};

export default Quotable;
