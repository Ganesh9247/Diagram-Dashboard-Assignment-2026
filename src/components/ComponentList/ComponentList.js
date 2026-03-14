import React from "react";

function ComponentList({ components, selected, setSelected }) {
  return (
    <div>
      <h3>Components</h3>

      {components.map((comp) => (
        <div
          key={comp.id}
          onClick={() => setSelected(comp.id)}
          className={`component-item ${selected === comp.id ? "active" : ""}`}
        >
          {comp.name}
        </div>
      ))}
    </div>
  );
}

export default ComponentList;