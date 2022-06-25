import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Star, Line } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  const handelClick = () => {
    // Layer.toggleHitCanvas();
  };
  // const hitFunc = (context) => {
  //   context.beginPath();
  //   context.arc(0, 0, this.outerRadius() + 10, 0, Math.PI * 2, true);
  //   context.closePath();
  //   context.fillStrokeShape(this);
  // };this
  return (
    <>
      <button onClick={handelClick}>Toggel Button</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={text} fontSize={24} fill={"black"} x={10} y={30} />
          <Line
            x={70}
            y={100}
            points={[0, 0, 50, 0, 50, 100, 0, 100]}
            tension={1}
            stroke={"black"}
            strokeWidth={1}
            hitStrokeWidth={20}
            onMouseOver={() => setText("Mouse Over Line")}
            onMouseOut={() => setText("Mouse Out Line")}
            onMouseDown={() => setText("Mouse Down Line")}
            onMouseUp={() => setText("On Mouse Up Line")}
          />
          <Star
            x={300}
            y={150}
            numPoints={7}
            innerRadius={50}
            outerRadius={70}
            fill={"red"}
            stroke={"black"}
            strokeWidth={4}
            // hitFunc={hitFunc}
            onMouseOver={() => setText("Mouse Over Star")}
            onMouseOut={() => setText("Mouse Out Star")}
            onMouseDown={() => setText("Mouse Down Star")}
            onMouseUp={() => setText("On Mouse Up Star")}
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
