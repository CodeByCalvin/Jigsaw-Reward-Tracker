import React, { useState } from "react";

function Sidebar(props) {
  function handleHorizontalPiecesChange(event) {
    props.onHorizontalPiecesChange(parseInt(event.target.value));
  }

  function handleVerticalPiecesChange(event) {
    props.onVerticalPiecesChange(parseInt(event.target.value));
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
      <label htmlFor="startdate">Start Date:</label>
      <input type="date" id="startdate" className="startdate" />

      <br></br>
      <label htmlFor="startdate">End Date:</label>
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
      <label htmlFor="jigsawPieceSize">Jigsaw piece pieceSize:</label>
      <input
        type="number"
        id="jigsawPieceSize"
        className="jigsaw-piece-size"
        defaultValue={150}
      />
      <br></br>
      <label htmlFor="imageInput">Upload image:</label>
      <input
        type="file"
        id="imageInput"
        className="image-input"
        onChange={props.onImageChange}
      />
      <br></br>
      <button onClick={props.onPrint}>Print Certicate</button>
    </div>
  );
}

export default Sidebar;
