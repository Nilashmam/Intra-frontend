import React, { useEffect, useState, useRef, useContext } from "react";
import { Editor } from "@monaco-editor/react";
import userContext from "../context/userContext";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import Logout from "../components/logout";

const receiverDashboard = () => {
  const { urlCode } = useParams();
  const { userName } = useParams();
  console.log(urlCode);
  let { logoutUser } = useContext(userContext);
  let [codeValue, setCodeValue] = useState("");
  let [codeLanguage, setCodeLanguage] = useState("");
  const [socket, setSocket] = useState(null);
  let [output, setOutput] = useState("");

  useEffect(() => {
    const socket = io.connect("https://intra-backend.onrender.com");
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("codeOutput", (data) => {
        if (urlCode == data.room && userName == data.username) {
          setCodeValue(data.value);
          setCodeLanguage(data.language);
          setOutput(data.output);
        }
      });
    }
  }, [socket]);

  return (
    <div>
      <Logout />

      <div className="justify-start flex">
        <div className="p-4">
          <div className="justify-start flex p-2">
            <p className="pr-4">
              <b>Share this room with candidate : </b>
            </p>
            <textarea
              style={{
                height: "30px",
                resize: "none",
                border: "2px Solid black",
                borderRadius: "5px",
              }}
              readOnly
              value={`${urlCode}`}
            />
          </div>
          <Editor
            height="84vh"
            width="1200px"
            theme="vs-dark"
            options={{ fontSize: 20 }}
            language={codeLanguage}
            value={codeValue}
            //   options={{ fontSize: 20 }}
            //   onMount={onMount}
            //   onChange={(newValue, event) => setValue(newValue)}
          />
        </div>
        <div>
          <div style={{ padding: "5px" }} className="w-96">
            <button
              style={{ border: "2px solid black", fontSize: "20px" }}
              className="mt-14 w-full"
            >
              Run Code
            </button>
            <textarea
              style={{
                resize: "none",
                border: "2px solid black",
                fontSize: "20px",
                height: "calc(108vh - 280px)",
              }}
              className="w-full mt-4"
              readOnly
              value={output}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default receiverDashboard;
