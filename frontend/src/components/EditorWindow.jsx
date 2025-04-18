import React from "react";
import Editor from "@monaco-editor/react";

const EditorWindow = ({
  language,
  code,
  handleCodeChange,
  runCode,
  outPut,
}) => (
  <div className="editor-wrapper">
    <Editor
      height={"60%"}
      defaultLanguage={language}
      language={language}
      value={code}
      onChange={handleCodeChange}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        fontSize: 14,
      }}
    />
    <button className="run-btn" onClick={runCode}>
      Execute
    </button>
    <textarea
      className="output-console"
      value={outPut}
      readOnly
      placeholder="Output will appear here ..."
    />
  </div>
);

export default EditorWindow;
