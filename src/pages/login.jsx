import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import userContext from "../context/userContext";
import "../App.css";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const login = () => {
  let { loginUser } = useContext(userContext);
  let { user } = useContext(userContext);

  return user ? (
    <Navigate to="/redirector" />
  ) : (
    <div className="flex">
      {/* <form onSubmit={loginUser} className='formStyle'>
                    <table>
                        <tbody>
                            <td className='tdStyle'>
                                <tr>
                                    <img className='imgStyle' src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/employees-users-icon.png"/>
                                </tr>
                            </td>
                            <td className='tdStyle'>
                            <tr>
                                <td className='tdStyle'>
                                    Username  <input className='inputStyle' type="text" name="username"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='tdStyle'>
                                    Password  <input className='inputStyle' type="password" name="password" />
                                </td>
                            </tr>
                            <tr>
                                <td className='tdStyle'>
                                    <input type="submit" className='submit-button'/>
                                </td >
                            </tr>
                            </td>

                        </tbody>
                    </table>
                </form> */}

        <div style={{marginTop: '8%' , padding : '5%'}}>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 h-full"
            onSubmit={loginUser}
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
              />
            </div>

            <Button type="submit" className="mt-6" fullWidth>
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <a href="register" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </form>
        </Card>
        </div>
        <div
        className="min-h-screen px-20 py-5 bg-[url('https://images.pexels.com/photos/2041637/pexels-photo-2041637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover"
        style={{width:'70%'}}
      >
      </div>
    </div>
  );
};

export default login;
