import React, { useState, useEffect, useRef } from "react";

const Jigsaw = (props) => {
  const puzzleRef = useRef();
  const [horizontalPieces, setHorizontalPieces] = useState(3);
  const [verticalPieces, setVerticalPieces] = useState(3);
  const [pieceSize, setPieceSize] = useState(100);

  useEffect(() => {
    const Canvas = window.headbreaker.Canvas;

    const autogen = new Canvas(puzzleRef.current, {
      width: 2000,
      height: 650,
      pieceSize: 100,
      proximity: 20,
      borderFill: 10,
      strokeWidth: 2,
      lineSoftness: 0.18,
    });

    autogen.autogenerate({
      horizontalPiecesCount: horizontalPieces,
      verticalPiecesCount: verticalPieces,
      metadata: [
        { color: "#B83361" },
        { color: "#B87D32" },
        { color: "#A4C234" },
        { color: "#37AB8C" },
      ],
    });

    autogen.draw();
  }, [horizontalPieces, verticalPieces, pieceSize]);

  return <div ref={puzzleRef}></div>;
};

export default Jigsaw;
