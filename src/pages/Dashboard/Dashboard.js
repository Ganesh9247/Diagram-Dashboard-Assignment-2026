import React, { useState, useEffect } from "react";
import UploadBox from "../../components/UploadBox/UploadBox";
import DiagramViewer from "../../components/DiagramViewer/DiagramViewer";
import ComponentList from "../../components/ComponentList/ComponentList";
import { getComponents } from "../../services/api";
import "../../styles/dashboard.css";

function Dashboard() {

  const [image, setImage] = useState(null);
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const data = getComponents();
    setComponents(data);
  }, []);

  return (
    <div className="dashboard-container">

      {/* Upload Section */}
      <div className="upload-section">
        <UploadBox setImage={setImage} />
      </div>

      {/* Main Layout */}
      <div className="main-layout">

        {/* Diagram Viewer */}
        <div className="diagram-viewer">
          <DiagramViewer
            image={image}
            selected={selected}
          />
        </div>

        {/* Component Sidebar */}
        <div className="sidebar">
          <ComponentList
            components={components}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;