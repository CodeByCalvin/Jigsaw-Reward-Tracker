import React, { useState } from "react";
import Jigsaw from "./components/jigsaw";
import Sidebar from "./components/sidebar";

function App() {
  const [horizontalPieces, setHorizontalPieces] = useState(3);
  const [verticalPieces, setVerticalPieces] = useState(3);

  function handleHorizontalPiecesChange(newHorizontalPieces) {
    setHorizontalPieces(newHorizontalPieces);
  }

  function handleVerticalPiecesChange(newVerticalPieces) {
    setVerticalPieces(newVerticalPieces);
  }
  return (
    <div id="my-canvas" className="App ">
      <Jigsaw
        horizontalPieces={horizontalPieces}
        verticalPieces={verticalPieces}
      />
      <Sidebar
        onHorizontalPiecesChange={handleHorizontalPiecesChange}
        onVerticalPiecesChange={handleVerticalPiecesChange}
      />
    </div>
  );
}

export default App;
