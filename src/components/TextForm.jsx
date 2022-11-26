import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("Uppercase was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase.", "success");
  };

  const handleDownClick = () => {
    console.log("Lowercase was clicked.");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase.", "success");
  };

  const handleClearClick = () => {
    console.log("Clear Text was clicked.");
    let newText = "";
    setText(newText);
    props.showAlert("Text was cleared.", "success");
  };

  const handleCopyClick = () => {
    console.log("Copy Text was clicked.");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text was copied to clipboard.", "success");
  };

  const handleExtraSpaceClick = () => {
    console.log("Remove extra spaces was clicked.");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces were removed.", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change.");
    setText(event.target.value);
  };

  //   setText("i am prabesh");
  // console.log(useState("Enter your text here"))
  return (
    <>
      <div>
        <h1
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          {/* <label htmlFor="myBox" className="form-label"></label> */}
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="6"
            placeholder="bol rahe hai, aap ki text ka gaand faad denge bsdk madalchor...."
          ></textarea>
        </div>
        <div className="pt-3">
          <button
            className="btn btn-secondary mx-2 my-1"
            onClick={handleUpClick}
          >
            Convert to UPPERCASE
          </button>

          <button
            className="btn btn-secondary mx-2 my-1"
            onClick={handleDownClick}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-secondary mx-2 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-secondary mx-2 my-1"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-secondary mx-2 my-1"
            onClick={handleExtraSpaceClick}
          >
            Remove extra Spaces
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h2
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Your Text Summary
        </h2>
        <p
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Text contains {text.split(" ").length - 1} words and {text.length}{" "}
          characters{" "}
        </p>
        <h2
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Preview:
        </h2>
        <p
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {text.length > 0 ? text : "Enter something to preview here:"}
        </p>
      </div>
    </>
  );
}
