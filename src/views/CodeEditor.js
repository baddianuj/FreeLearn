import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import "./CodeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState('// Try your Javascript Programs here!!!\n');
  const [output, setOutput] = useState('');

  const handleEditorChange = (value) => {
    setCode(value || '');
  };

  const runCode = () => {
    try {
      // Capture console.log outputs
      const log = [];
      const consoleLog = (...args) => log.push(args.join(' '));
      const wrappedCode = `
        (function() {
          const console = { log: consoleLog };
          ${code}
        })();
      `;

      // Use Function constructor for better safety than eval
      const execute = new Function('consoleLog', wrappedCode);
      execute(consoleLog);

      setOutput(log.join('\n'));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <Editor
          height="90%"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={handleEditorChange}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <button onClick={runCode} style={{ padding: '10px 20px', marginRight: '10px' }}>
          Run
        </button>
      </div>
      <div style={{ padding: '10px', backgroundColor: '#1e1e1e', color: 'white', height: '30%' }}>
        <h3>Output:</h3>
        <pre>{output || 'Your output will appear here...'}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
