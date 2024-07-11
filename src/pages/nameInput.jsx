import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Logout from "../components/logout";
import "../App.css";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const nameInput = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
  });
  const redirect = () => {
    const urlCode = uuidv4().replace(/-/g, "").substring(0, 8);
    navigate(`/receiver/${urlCode}/${userData.username}`);
  };

  return (
    <div>
      <Logout />
      <div className="justify-center flex h-full">
        <Card
          className="flex-row"
          shadow={false}
          style={{ border: "2px solid black", marginTop: "7%"}}
        >
          <img
            src="https://images.pexels.com/photos/11982694/pexels-photo-11982694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className=" w-1/2 basic-1/4 object-contain rounded-l-md"
          />
          <form
            className="mt-8 mb-2 max-w-screen-lg basic-1/4 pt-20 pl-20"
            onSubmit={redirect}
          >
            <div className="mb-1 flex flex-col gap-6 w-96">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Candidate Name
              </Typography>
              <Input
                size="lg"
                placeholder="candidate name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="username"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </div>

            <Button type="submit" className="mt-6" fullWidth>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default nameInput;
