import React, { useEffect, useState, useRef, useContext } from 'react';
import { Editor } from '@monaco-editor/react';
import LanguageSelector from './languageSelector';
import userContext from '../context/userContext'
import Output from './output';
import io from 'socket.io-client'





const editor = () => {
  const { user } = useContext(userContext)
  const CODE_SNIPPETS = {
    javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("${user.username}");\n`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "${user.username}" });\n`,
    python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("${user.username}")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("${user.username}");\n\t}\n}\n`,
    csharp:
      'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
    php: `"<?php\n\n$name = '${user.username}';\necho $name;\n"`,
  };
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS['javascript']);
  const [language, setLanguage] = useState('javascript');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io.connect("http://localhost:5000");
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("code", { value: value, language: language });
    }
  }, [value, language, socket]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language])
  };
  console.log(value)
  
 

  return (
    <div>
       <div style={{display : 'flex',justifyContent: 'center'}}>
      <div style={{ padding : '10px'}}>
        <textarea
          style={{ marginTop : '35px' ,width: '400px', height: '605px', padding: '10px', resize: 'none' }}
          readOnly
        />
      </div>
      <div style={{width : '100%'}}>
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor
          height="70vh"
          width='120vh'
          theme="vs-dark"
          language={language}
          value={value}
          options={{ fontSize: 20 }}
          onMount={onMount}
          onChange={(newValue, event) => setValue(newValue)}

        />
      </div>
      <div>
        <Output editorRef={value} language={language} />
      </div>
       </div>
    </div>
  );
};

export default editor;
