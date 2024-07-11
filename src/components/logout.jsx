import { React, useContext } from "react";
import userContext from "../context/userContext";
import "../App.css";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const logout = () => {
  const { logoutUser } = useContext(userContext);
  return (
    <div className="justify-end flex p-2">
      <Button
        onClick={logoutUser}
        className="mt-6"
        style={{
          marginTop: "10px",
          right: "15px",
          padding: "15px",
          borderRadius: "5px",
          border: "2px Solid black",
        }}
        fullwidth
      >
        Logout
      </Button>
    </div>
  );
};

export default logout;
