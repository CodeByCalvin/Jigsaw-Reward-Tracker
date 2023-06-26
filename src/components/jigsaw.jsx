import React, { useEffect } from "react";
import headbreaker from "headbreaker";
import { useState } from "react";

const Jigsaw = (props) => {
  // Jigsaw with image
  useEffect(() => {
    const backgroundImg = new Image();
    backgroundImg.src = props.image || "";
    backgroundImg.onload = () => {
      const autogen = new headbreaker.Canvas("autogen-canvas", {
        width: 800,
        height: 650,
        pieceSize: props.pieceSize,
        proximity: 20,
        borderFill: 10,
        strokeWidth: 1.5,
        lineSoftness: 0.18,
        image: backgroundImg,
      });

      autogen.adjustImagesToPuzzleHeight();
      autogen.autogenerate({
        horizontalPiecesCount: props.horizontalPieces,
        verticalPiecesCount: props.verticalPieces,
      });
      autogen.draw();
    };
  }, [
    props.horizontalPieces,
    props.verticalPieces,
    props.pieceSize,
    props.image,
  ]);

  return (
    <div>
      <div id="autogen-canvas"></div>
    </div>
  );
};

export default Jigsaw;
