import React, { useState } from "react";
import Jigsaw from "./components/jigsaw";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

function App() {
  const [horizontalPieces, setHorizontalPieces] = useState(3);
  const [verticalPieces, setVerticalPieces] = useState(3);
  const [className, setClassName] = useState();

  function handleHorizontalPiecesChange(newHorizontalPieces) {
    setHorizontalPieces(newHorizontalPieces);
  }

  function handleVerticalPiecesChange(newVerticalPieces) {
    setVerticalPieces(newVerticalPieces);
  }

  function handleClassNameChange(newClassName) {
    setClassName(newClassName);
  }

  return (
    <div id="my-canvas" className="App ">
      <Header className={className} />
      <Jigsaw
        horizontalPieces={horizontalPieces}
        verticalPieces={verticalPieces}
      />
      <Sidebar
        onHorizontalPiecesChange={handleHorizontalPiecesChange}
        onVerticalPiecesChange={handleVerticalPiecesChange}
        onClassNameChange={handleClassNameChange}
      />
    </div>
  );
}

export default App;
