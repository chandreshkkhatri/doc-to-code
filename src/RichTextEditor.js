import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div style={styles.root} className="column">
      <div className="column-header">
        <div style={styles.inlineInputs}>
          <select>
            <option value="">Arial</option>
          </select>
        </div>
        <div style={styles.inlineInputs}>
          <select>
            <option value="">Normal Text</option>
          </select>
        </div>
        <div style={styles.inlineInputs}>
          <button style={styles.bold}>B</button>
        </div>
        <div style={styles.inlineInputs}>
          <button style={styles.italic}>I</button>
        </div>
        <div style={styles.inlineInputs}>
          <button style={styles.underline}>U</button>
        </div>
        <div style={styles.inlineInputs}>
          <button></button>
        </div>
        <div style={styles.inlineInputs}>
          <button></button>
        </div>
        <div style={styles.inlineInputs}>
          <button></button>
        </div>
        <div style={styles.inlineInputs}>
          <button></button>
        </div>
        <div style={styles.inlineInputs}>
          <button>
            <i className="fas fa-align-justify"></i>
          </button>
          <button>
            <i className="fas fa-align-left"></i>
          </button>
          <button>
            <i className="fas fa-align-center"></i>
          </button>
          <button>
            <i className="fas fa-align-right"></i>
          </button>
        </div>
      </div>
      <div style={styles.editor} className="column-body">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Enter some text..."
        />
      </div>
    </div>
  );
};

const styles = {
  root: {
    fontFamily: "'Helvetica', sans-serif",
    padding: 20,
    width: 600,
  },
  editor: {
    border: "1px solid #ccc",
    cursor: "text",
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  underline: {
    textDecoration: "underline",
  },
  inlineInputs: {
    display: "inline",
    margin: "5px",
  },
};

export default RichTextEditor;
