import React, { useState } from "react";

function Sidebar(props) {
  function handleHorizontalPiecesChange(event) {
    props.onHorizontalPiecesChange(parseInt(event.target.value));
  }

  function handleVerticalPiecesChange(event) {
    props.onVerticalPiecesChange(parseInt(event.target.value));
  }

  return (
    <div className="sidebar">
      <label htmlFor="horizontalPiecesInput">
        Number of horizontal pieces:
      </label>
      <input
        type="number"
        id="horizontalPiecesInput"
        className="horizontal-pieces-input"
        value={props.horizontalPieces}
        onChange={handleHorizontalPiecesChange}
      />
      <label htmlFor="verticalPiecesInput">Number of vertical pieces:</label>
      <input
        type="number"
        id="verticalPiecesInput"
        className="vertical-pieces-input"
        value={props.verticalPieces}
        onChange={handleVerticalPiecesChange}
      />
    </div>
  );
}

export default Sidebar;
