import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import userContext from "../context/userContext";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    userType: "",
  });
  let { user } = useContext(userContext);

  const registerUser = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post("https://intra-backend.onrender.com/user/register", userData)
      .then((response) => console.log(response), navigate("/login"))
      .catch((err) => console.log(err));
  };

  return user ? (
    <Navigate to="/redirector" />
  ) : (
    <div
      className=" flex justify-end h-full  min-h-screen px-20 py-5 bg-[url('https://images.pexels.com/photos/3746957/pexels-photo-3746957.jpeg')] bg-no-repeat bg-contain"
      style={{ backgroundSize: "65%" }}
    >
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 h-full"
          onSubmit={registerUser}
        >
          <div className="mb-1 flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="enter a valid username"
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
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              First Name
            </Typography>
            <Input
              size="lg"
              placeholder="enter your first name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="first_name"
              value={userData.first_name}
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Last Name
            </Typography>
            <Input
              size="lg"
              placeholder="enter your last name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="last_name"
              value={userData.last_name}
              onChange={(e) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <div className="flex items-center">
              <Typography variant="h6" color="blue-gray" className="mr-2">
                Candidate:
              </Typography>
              <input
                type="radio"
                id="candidate"
                name="userType"
                className="mr-4"
                onClick={(e) =>
                  setUserData({ ...userData, userType: "Candidate" })
                }
              />

              <Typography variant="h6" color="blue-gray" className="mr-2">
                Interviewer:
              </Typography>
              <input
                type="radio"
                id="interviewer"
                name="userType"
                className="mr-4"
                onClick={(e) =>
                  setUserData({ ...userData, userType: "Interviewer" })
                }
              />
            </div>
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="login" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default register;
