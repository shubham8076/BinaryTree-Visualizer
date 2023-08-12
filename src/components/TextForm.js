import React, { useState } from "react";
import Tree from "./Tree";
import "../css/Textform.css"

export default function TextForm({mode}) {
  const handleOnChange = (event) => {
    console.log("OnChange " + event.target.value);
    setText(event.target.value);
  };

  const handleType1 = () => {
    console.log("Fired 1");
    setType(1);
  };

  const handleType2 = () => {
    console.log("Fired 2");
    setType(2);
  };

  const handleType3 = () => {
    console.log("Fired 3");
    setType(3);
  };

  // const handleType4 = () => {
  //   console.log("Fired 4");
  //   setType(4);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`you have submitted ${text} with option ${type}`);
    setText2(text);
    setType2(type);
    setText("");
    // console.log(`text.length= ${text.length}`);
  };

  const [text, setText] = useState("");
  const [type, setType] = useState(1);
  const [text2, setText2] = useState("");
  const [type2, setType2] = useState(1);
  return (
    <>
      <div className={`${mode==="white"?"Textform-light":"Textform-dark"}`}>
      <div className={`mt-5 px-3 `}>
        <h1>Choose a traversal required for the tree</h1>
      </div>
      <div className="form-check form-check-inline m-4 ">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          onClick={handleType1}
          defaultChecked
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Pre-Order Binary Tree
        </label>
      </div>
      <div className="form-check form-check-inline m-4">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
          onClick={handleType2}
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Post-Order Binary Tree
        </label>
      </div>
      <div className="form-check form-check-inline m-4">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
          onClick={handleType3}
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          In-Order Binary Tree
        </label>
      </div>
      {/* <div className="form-check form-check-inline m-4">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
          onClick={handleType4}
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          In-Order Input Binary Tree
        </label>
      </div> */}
      <div className="px-4">
        <h3>Enter the Input for the binary tree</h3>
      </div>
      <div className="input-group mx-4">
        <span className="input-group-text">Input</span>
        <textarea
          className={`form-control ${mode==="white"&&"Textform-textarea"}`}
          value={text}
          onChange={handleOnChange}
          aria-label="With textarea"
        ></textarea>
      </div>
      <div className="input-group mx-4 my-4">
        <button
          className={`btn ${mode !== "white"?"btn-light":"textform-btn-dark"}`} 
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div>
        <Tree text={text2} type={type2} mode={mode} />
      </div>
      </div>
    </>
  );
}
