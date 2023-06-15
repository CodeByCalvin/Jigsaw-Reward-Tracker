import React, { useState } from "react";

function Sidebar() {
  const [className, setClassName] = useState("");
  const [image, setImage] = useState(null);
  const [pieces, setPieces] = useState(0);
  function handleSubmit(event) {
    event.preventDefault();
    setClassName(event.target.elements.classInput.value);
  }

  return (
    <div className="sidebar">
      <h1>{className}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="classInput"
          className="class-input"
          placeholder="Enter your class name..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Sidebar;
