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
 
  const [textarea, setTextarea] = useState({color: "",fontStyle:"",fontWeight:"",textDecorationLine:""});
  //set color
  function setfont(e) {
    let setcolor=e.target.key;
    console.log(setcolor);
    setTextarea(prevtextarea => ({
      ...prevtextarea,color:key
    }));
  }

  //font style set
 function setfont(e){
   let fstyle=e.target.getAttribute('style'); 
    setTextarea(prevtextarea => ({
      ...prevtextarea,fstyle
    }));
   } 
 

  const stylingBoxes = stylings.map((style) => (
    <button className="btn btn-light" style={styles[style]} key={style}>
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
    />
  ));

  return (
    <div className="App">
      <div className="my-3" onClick={(e) => setfont(e)}>{stylingBoxes}</div>
      <textarea style={textarea} />
      <div className="my-3" onClick={(e) => changeColor(e)}>{colorBoxes}</div>
    </div>
  );
}

export default App;
