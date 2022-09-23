import React from "react";
import {auth} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import Signin from "./Signin";
import Logout from "./Logout";

function Navbar() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="bg-gray-800 flex justify-between items-center p-4 h-20 ">
      <h1 className="text-white text-3xl font-semibold">Chit-Chat </h1>
      {user ? <Logout /> : <Signin />}
    </div>
  );
}

export default Navbar;