import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const home = () => {
  return (
    <div>
      <div
        className="h-screen bg-cover  bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <img
          className="relative"
          src="https://i.postimg.cc/xdFfJv47/Black-And-White-Aesthetic-Minimalist-Modern-Simple-Typography-Coconut-Cosmetics-Logo-removebg-previe.png"
        ></img>

        <div className="text-center">
          <div>
            <p className="font-mono text-3xl font-bold w-69 p-10">
              A website designed for conducting interviews where candidates can
              participate in interviews and interviewers can efficiently manage
              and conduct them.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="p-4">
              <Link to="/register">
                <Button className="px-10 py-5 rounded-full">Register</Button>
              </Link>
            </div>
            <div className="p-4">
              <Link to="/login">
                <Button className="px-12 py-5 rounded-full">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
