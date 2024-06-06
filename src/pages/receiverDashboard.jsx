import React, { useEffect, useState, useRef, useContext } from 'react';
import { Editor } from '@monaco-editor/react';
import userContext from '../context/userContext'
import io from 'socket.io-client'


const socket = io.connect("http://localhost:5000")



const receiverDashboard = () => {

    let [codeValue , setCodeValue] = useState('')
    let [codeLanguage , setCodeLanguage] = useState('')
    useEffect( () => {
        socket.on('codeOutput',(response) => {
            console.log(response)
            setCodeValue(response.value)
            setCodeLanguage(response.language)
        })
    },[socket])
    
  return (
    <div>
        Receiver Editor Side
        <Editor
          height="70vh"
          width='120vh'
          theme="vs-dark"
          options={{ fontSize: 20 }}
            language={codeLanguage}
             value={codeValue}
        //   options={{ fontSize: 20 }}
        //   onMount={onMount}
        //   onChange={(newValue, event) => setValue(newValue)}
        />
    </div>
  )
}

export default receiverDashboard