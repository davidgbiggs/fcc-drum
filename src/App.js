import React from "react";
import "./App.scss";
import PadBank from "./PadBank";
import Controls from "./Controls";

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <main
        id="drum-machine"
        className="d-flex flex-column flex-sm-row align-items-center mt-5"
      >
        <PadBank />
        <Controls />
      </main>
    </div>
  );
}

export default App;
