import './App.css'; 
import {useState} from "react";
import {drumPads} from "./drumPads.js";

export default function App() {
  const [txt,setText]=useState("");

  function playDrums(pad){
    let d=document.getElementById(pad);
    d.play();
  }

  window.document.onkeyup = function(event) {
        let keystroke = event.key;
        for(let i=0;i<9;i++){
        if (keystroke.toUpperCase() === drumPads[i].letter) {
          playDrums(drumPads[i].letter);}}}

  function showText(pad) {
    setText(pad);
  }
  function resetField() {
    setText("");
  }
  let drums=drumPads.map((item)=><div key={item.id}><div className="drum-pad" id={item.id} onClick={()=>{playDrums(item.letter),showText(item.text)}}>
    {item.letter}
 <audio className="clip" id={item.letter} src={item.src}></audio></div>
  </div>);
  return (
    <div className="Drums">
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div id="display">
          <div id="show-text" onClick={resetField}>{txt}</div>
         <div className="drum-pads">
          {drums}
          </div>
        </div></div>
        <div id="drum-pic">
        <img src="https://www.dropbox.com/s/855j8tnac9nxrsd/drums.svg?raw=1" />
        </div>
    </div>
  )
}