import React from "react";
import {
  TransformWrapper,
  TransformComponent,
  useControls
} from "react-zoom-pan-pinch";

function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="viewer-controls">
      <button onClick={() => zoomIn()}>Zoom In</button>
      <button onClick={() => zoomOut()}>Zoom Out</button>
      <button onClick={() => resetTransform()}>Reset</button>
    </div>
  );
}

function DiagramViewer({ image, selected }) {

  const positions = {
    1: { top: "20%", left: "30%" },
    2: { top: "40%", left: "50%" },
    3: { top: "60%", left: "35%" },
    4: { top: "70%", left: "60%" }
  };

  return (
    <div className="diagram-viewer">

      {image ? (
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          wheel={{ step: 0.2 }}
        >
          <Controls />

          <TransformComponent>
            <div className="image-container">

              <img
                src={image}
                alt="diagram"
                className="diagram-image"
              />

              {selected && positions[selected] && (
                <div
                  className="highlight-box"
                  style={{
                    top: positions[selected].top,
                    left: positions[selected].left
                  }}
                />
              )}

            </div>
          </TransformComponent>
        </TransformWrapper>
      ) : (
        <p className="upload-text">Upload a diagram</p>
      )}

    </div>
  );
}

export default DiagramViewer;