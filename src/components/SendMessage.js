import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

function SendMessage() {
  const [input, setInput] = useState("");

  const sendMsg = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "message"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <form
      onSubmit={sendMsg}
      className="h-14 w-full  flex text-xl absolute bottom-0"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Message"
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none "
      />
      <button className="w-[20%] bg-sky-500 text-white text-bold" type="submit">
        Send 🚀
      </button>
    </form>
  );
}

export default SendMessage;
