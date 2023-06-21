import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./sidebar";

const Jigsaw = (props) => {
  const puzzleRef = useRef();
  const [pieceSize, setPieceSize] = useState(100);

  useEffect(() => {
    const Canvas = window.headbreaker.Canvas;

    const autogen = new Canvas(puzzleRef.current, {
      width: 2000,
      height: 650,
      pieceSize: 150,
      proximity: 5,
      borderFill: 10,
      strokeWidth: 2,
      lineSoftness: 0.18,
    });

    const metadata = [
      { color: "#B83361" },
      { color: "#B87D32" },
      { color: "#A4C234" },
      { color: "#37AB8C" },
    ];

    const metadataArray = Array.from(
      { length: props.horizontalPieces * props.verticalPieces },
      (_, i) => metadata[i % metadata.length]
    );

    autogen.autogenerate({
      horizontalPiecesCount: props.horizontalPieces,
      verticalPiecesCount: props.verticalPieces,
      metadata: metadataArray,
    });

    autogen.draw();
  }, [props.horizontalPieces, props.verticalPieces, pieceSize]);

  return <div ref={puzzleRef}></div>;
};
export default Jigsaw;
