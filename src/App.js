import React, { useState } from "react";
import Jigsaw from "./components/jigsaw";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

function App() {
  const [horizontalPieces, setHorizontalPieces] = useState(3);
  const [verticalPieces, setVerticalPieces] = useState(3);
  const [pieceSize, setPieceSize] = useState(150);
  const [uploadedImage, setUploadedImage] = useState(
    "https://i.imgur.com/GlmzpWu.jpg"
  );
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

  const handleImageUpload = (image) => {
    setUploadedImage(image.src);
  };

  function handlePieceSizeChange(newPieceSize) {
    setPieceSize(newPieceSize);
  }

  return (
    <div id="my-canvas" className="App ">
      <Header className={className} />
      <Jigsaw
        horizontalPieces={horizontalPieces}
        verticalPieces={verticalPieces}
        // image={"src/imgs/classphotoexample.jpg"}
        pieceSize={pieceSize}
        image={uploadedImage}
      />
      <Sidebar
        onHorizontalPiecesChange={handleHorizontalPiecesChange}
        onVerticalPiecesChange={handleVerticalPiecesChange}
        onPieceSizeChange={handlePieceSizeChange}
        onClassNameChange={handleClassNameChange}
        onImageUpload={handleImageUpload}
      />
    </div>
  );
}

export default App;
