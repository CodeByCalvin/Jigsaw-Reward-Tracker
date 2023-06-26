import React, { useState } from "react";

function Sidebar(props) {
  // Upload custom image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = () => {
        props.onImageUpload(image);
      };
    };
    reader.readAsDataURL(file);
  };

  // Sidebar functions
  function handleHorizontalPiecesChange(event) {
    props.onHorizontalPiecesChange(parseInt(event.target.value));
  }

  function handleVerticalPiecesChange(event) {
    props.onVerticalPiecesChange(parseInt(event.target.value));
  }

  function handlePieceSizeChange(event) {
    props.onPieceSizeChange(parseInt(event.target.value));
  }

  function handleClassNameChange(event) {
    props.onClassNameChange(event.target.value);
  }

  return (
    <div className="sidebar">
      <label htmlFor="classname">Class name:</label>
      <input
        type="text"
        id="classname"
        className="classname"
        value={props.className}
        onChange={handleClassNameChange}
      />
      <br></br>
      <label htmlFor="startdate">Start date:</label>
      <input type="date" id="startdate" className="startdate" />

      <br></br>
      <label htmlFor="startdate">End date:</label>
      <input type="date" id="startdate" className="startdate" />

      <br></br>
      <label htmlFor="horizontalPiecesInput">
        Number of horizontal pieces:
      </label>
      <input
        type="number"
        id="horizontalPiecesInput"
        className="horizontal-pieces-input"
        value={props.horizontalPieces}
        defaultValue={3}
        onChange={handleHorizontalPiecesChange}
      />
      <br></br>
      <label htmlFor="verticalPiecesInput">Number of vertical pieces:</label>
      <input
        type="number"
        id="verticalPiecesInput"
        className="vertical-pieces-input"
        value={props.verticalPieces}
        defaultValue={3}
        onChange={handleVerticalPiecesChange}
      />
      <br></br>
      <label htmlFor="jigsawPieceSize">Jigsaw piece size:</label>
      <input
        type="number"
        id="jigsawPieceSize"
        className="jigsaw-piece-size"
        defaultValue={150}
        onChange={handlePieceSizeChange}
      />
      <br></br>
      <label htmlFor="image-upload">Upload Image:</label>
      <input
        type="file"
        id="image-upload"
        className="image-upload"
        onChange={handleImageUpload}
      />
      <br></br>
      <button onClick={props.onPrint}>Print Certicate</button>
    </div>
  );
}

export default Sidebar;
