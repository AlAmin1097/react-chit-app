import React from "react";
import { auth } from "../firebase";

function Logout() {
  const signOut = () => {
    signOut(auth);
  }
  return (
    <button type="button" class="bg-gray-200 px-4 py-2 hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring focus:ring-white" onClick={() => auth.signOut()}>Logout</button>

  );
}

export default Logout;