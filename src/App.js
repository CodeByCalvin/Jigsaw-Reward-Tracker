import React, { useState } from "react";
import Jigsaw from "./components/jigsaw";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

function App() {
  const [horizontalPieces, setHorizontalPieces] = useState(3);
  const [verticalPieces, setVerticalPieces] = useState(3);
  const [pieceSize, setPieceSize] = useState(150);
  const [pieceSpacing, setPieceSpacing] = useState(12);
  const [uploadedImage, setUploadedImage] = useState(
    "https://i.imgur.com/GlmzpWu.jpg"
  );
  const [className, setClassName] = useState();

  const handleHorizontalPiecesChange = (event) => {
    setHorizontalPieces(parseInt(event.target.value));
  };

  const handleVerticalPiecesChange = (event) => {
    setVerticalPieces(parseInt(event.target.value));
  };

  const handleClassNameChange = (newClassName) => {
    setClassName(newClassName);
  };

  const handleImageUpload = (image) => {
    setUploadedImage(image.src);
  };

  const handlePieceSizeChange = (event) => {
    setPieceSize(parseInt(event.target.value));
  };

  const handlePieceSpacingChange = (event) => {
    let value = parseInt(event.target.value);
    value = value < 0 ? 0 : value;
    setPieceSpacing(realValue(value));
  };

  // Function to convert real value to display value
  const displayValue = (realValue) => {
    const value = 15 - realValue;
    return value < 0 ? 0 : value;
  };

  // Function to convert display value to real value
  const realValue = (displayValue) => {
    const value = 15 - displayValue;
    return value < 0 ? 0 : value;
  };

  return (
    <div id="my-canvas" className="App ">
      <Header className={className} />
      <Jigsaw
        horizontalPieces={horizontalPieces}
        verticalPieces={verticalPieces}
        pieceSize={pieceSize}
        pieceSpacing={pieceSpacing}
        image={uploadedImage}
      />
      <Sidebar
        onHorizontalPiecesChange={handleHorizontalPiecesChange}
        onVerticalPiecesChange={handleVerticalPiecesChange}
        onPieceSizeChange={handlePieceSizeChange}
        onClassNameChange={handleClassNameChange}
        onImageUpload={handleImageUpload}
        onPieceSpacingChange={handlePieceSpacingChange}
        pieceSpacing={pieceSpacing}
        displayValue={displayValue}
        realValue={realValue}
      />
    </div>
  );
}

export default App;
