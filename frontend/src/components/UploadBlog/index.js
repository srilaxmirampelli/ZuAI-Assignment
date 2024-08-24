import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UploadBlog = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="content">
        <input required type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            className="editor"
            value={value}
            onChange={setValue}
          />
          <input type="file" id="file" />
          <label htmlFor="file">Upload Image</label>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

export default UploadBlog;
