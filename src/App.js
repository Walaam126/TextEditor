import "./App.css";
import React, { useState } from "react";
const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  
  const [textarea, setTextarea] = useState({ color: "", fontStyle: "", fontWeight: "", textDecorationLine: "" });

  //set color
 const settxtColor=(color) => {
 setTextarea(prevtextarea => ({
      ...prevtextarea,color:color
 }));
 }
  
  //set font style
  const settxtFont = (Font, e) => {
    const fprop = Object.keys(Font)[0];
    if (textarea[fprop] === "") {
      setTextarea(prevtextarea => ({
        ...prevtextarea, ...Font
      }));
      e.target.className = "btn btn-primary";
    } else {
      const newobj = {};
      newobj[fprop] = "";
      setTextarea(prevtextarea => ({
        ...prevtextarea, ...newobj
      }));
      e.target.className = "btn btn-light";
    }
  }
  
  //set button style
  const stylingBoxes = stylings.map((style) => (
    <button className="btn btn-light" style={styles[style]} key={style} onClick={(e) => settxtFont(styles[style],e)}>
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color} onClick={() => settxtColor(color)}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea style={textarea} />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
