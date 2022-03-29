import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./App.css";
function App() {
  let [box1, setbox1] = useState("");
  let [box2, setbox2] = useState("");
const colorchange = (setState,e)=>{
 setState (e.target.value)
}



  return (
    <div className="App">
      <div>
        <h2>NAME</h2>
        <TextField
          type="input"
          value={box1}
          onChange={(e) => {
            colorchange(setbox1,e)
          }}
          className={box1 !== "" ? "inputbox-filled" : "inputbox-notfilled"}
          variant="outlined"
        />
        <h2>AGE</h2>
        <TextField
          value={box2}
          onChange={(e) => {
            colorchange(setbox2,e)
          }}
          className={box2 != "" ? "inputbox-filled" : "inputbox-notfilled"}
          type="input"
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default App;
