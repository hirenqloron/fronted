import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './textarea.css'; // Import your CSS file for styling

function RichTextEditor() {
  const [editorHtml, setEditorHtml] = useState('');

  const formats = [
    'bold',
    'italic',
    'underline',
    'align',
  ];

  const handleCancel = () => {
    
    console.log('Cancelled');
    setEditorHtml(''); // Reset the editor content when canceling
  }

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline'],
        [{ 'align': [] }],
        ['link'],
      ],
      handlers: {
        'align': function(value) {
          if (value === 'left' || value === 'center' || value === 'right') {
            this.quill.format('align', value);
          }
        },
      },
    },
  };

  const handleSave = () => {
    // Implement your save logic here, using the editorHtml state
    console.log('Saved:', editorHtml);
  };

  

  return (
    <div className="editor-container">
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={setEditorHtml}
        modules={modules}
        formats={formats}
      />
      <div className="button-container">
        <button className="save-button" onClick={handleSave}>Save</button>
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default RichTextEditor;
