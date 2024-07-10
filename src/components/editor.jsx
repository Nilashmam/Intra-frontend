import React, { useEffect, useState, useRef, useContext } from 'react';
import { Editor } from '@monaco-editor/react';
import LanguageSelector from './languageSelector';
import userContext from '../context/userContext'
import Output from './output';
import io from 'socket.io-client'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { LANGUAGE_VERSIONS } from './languages';





const editor = () => {
  const { urlCode } = useParams()
  const { user } = useContext(userContext)
  const CODE_SNIPPETS = { 
    javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("${user.username}");\n`,
    typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "${user.username}" });\n`,
    python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("${user.username}")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("${user.username}");\n\t}\n}\n`,
    csharp:
      'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
    php: `<?php\n\n$name = '${user.username}';\necho $name;\n?>`,
  };
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS['javascript']);
  const [language, setLanguage] = useState('javascript');
  const [socket, setSocket] = useState(null);
  const [code, setCode] = useState('')

  let runCode = async() => {
    const sourceCode = value;
    try {
        const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
            language: language,
            version: LANGUAGE_VERSIONS[language],
            files: [
                {
                    content: sourceCode,
                },
            ],
        }).then(response => {
            console.log(response)
            setCode(response.data.run.output)
        })
    }
    catch (error) {
        console.log(error)

    }
  }

  useEffect(() => {
    const socketInstance = io.connect("https://intra-backend.onrender.com");
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("code", { room: urlCode, value: value, language: language, username: user.username ,output: code});
    }
  }, [value, language, socket,code]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };


  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language])
  };



  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ padding: '10px' }}>
        </div>
        <div style={{ width: '100%' }}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="89vh"
            width='170vh'
            theme="vs-dark"
            language={language}
            value={value}
            options={{ fontSize: 20 }}
            onMount={onMount}
            onChange={(newValue, event) => setValue(newValue)}

          />
        </div>
        <div style={{ padding: '5px' }}>
          <button
            style={{ marginTop: '40px', width: '100%', border: '2px solid black', fontSize: '20px' }}
            onClick={runCode}
          >
            Run Code
          </button>
          <textarea
            style={{ marginTop: '7px', width: '340px', height: '752px', resize: 'none', border: '2px solid black', fontSize: '20px' }}
            readOnly
            value={"output here -  \n"+code}
          />
        </div>
      </div>
    </div>
  );
};

export default editor;
