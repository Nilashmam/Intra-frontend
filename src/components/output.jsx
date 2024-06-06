import { React, useState } from 'react'
import { LANGUAGE_VERSIONS } from './languages';
import axios from 'axios'
const output = ({ editorRef, language }) => {
    const [code, setCode] = useState('')
    const runCode = async () => {
        const sourceCode = editorRef;
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
    return (
        <div style={{padding  : '5px'}}>
            <button style={{ marginTop: '40px', width: '100%'}} onClick={runCode}>Run Code</button>
            <textarea
                style={{ marginTop: '7px' , width: '300px', height: '585px', resize : 'none' }}
                readOnly
                value={code}
            />
        </div>
    )
}

export default output