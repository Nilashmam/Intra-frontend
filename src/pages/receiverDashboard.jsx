import React, { useEffect, useState, useRef, useContext } from "react";
import { Editor } from "@monaco-editor/react";
import userContext from "../context/userContext";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import Logout from "../components/logout";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

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
      <div className="justify-center flex">
        <div className="pr-4">
          <div className="justify-start flex p-2">
            <p className="pr-4">
              <b>Share this room with candidate : </b>
            </p>
            <textarea
              style={{
                resize: "none",
                border: "2px Solid black",
                borderRadius: "5px",
              }}
              className="h-8"
              readOnly
              value={`           ${urlCode}`}
            />
          </div>
          <Editor
            height="84vh"
            width="1180px"
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
            <Button
              style={{ border: "2px solid black" }}
              className="mt-10 w-full rounded-md"
            >
              Run Code
            </Button>
            <textarea
              style={{
                resize: "none",
                border: "2px solid black",
                fontSize: "20px",
                height: "calc(107vh - 280px)",
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
