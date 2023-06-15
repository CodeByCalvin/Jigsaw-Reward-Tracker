import React, { useState } from "react";
import Jigsaw from "./components/jigsaw";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div id="my-canvas" className="App ">
      <Jigsaw />
      <Sidebar />
    </div>
  );
}

export default App;
