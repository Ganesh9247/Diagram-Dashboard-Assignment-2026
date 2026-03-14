import React from "react";

function UploadBox({ setImage }) {

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <input type="file" accept="image/png, image/jpeg" onChange={handleUpload}/>
    </div>
  );
}

export default UploadBox;