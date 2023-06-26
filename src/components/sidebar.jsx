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

  // Display value vs real value
  return (
    <div className="sidebar">
      <label htmlFor="classname">Class name:</label>
      <input
        type="text"
        id="classname"
        className="classname"
        value={props.className}
        onChange={props.handleClassNameChange}
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
        defaultValue={3}
        value={props.horizontalPieces}
        onChange={props.onHorizontalPiecesChange}
      />
      <br></br>
      <label htmlFor="verticalPiecesInput">Number of vertical pieces:</label>
      <input
        type="number"
        id="verticalPiecesInput"
        className="vertical-pieces-input"
        defaultValue={3}
        value={props.verticalPieces}
        onChange={props.onVerticalPiecesChange}
      />
      <br></br>
      <label htmlFor="jigsawPieceSize">Jigsaw piece size:</label>
      <input
        type="number"
        id="jigsawPieceSize"
        className="jigsaw-piece-size"
        defaultValue={150}
        onChange={props.onPieceSizeChange}
      />
      <br></br>
      <label htmlFor="jigsawPieceSpacing">Jigsaw piece border:</label>
      <input
        type="range"
        min="0"
        max="15"
        id="jigsawPieceSpacing"
        className="jigsaw-piece-spacing"
        value={props.displayValue(props.pieceSpacing)}
        onChange={(event) => props.onPieceSpacingChange(event)}
      />
      <span>{props.displayValue(props.pieceSpacing)}</span>

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
