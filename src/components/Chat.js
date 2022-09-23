import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { db } from "../firebase";
import { onSnapshot, orderBy, query, collection } from "firebase/firestore";
import SendMessage from "./SendMessage";

function Chat() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  });

  return (
    <div>
      <main className="flex flex-col p-[10px] relative">

        {messages && messages.map((message => (
          <Message key={message.id} message={message} />

        )))}

      </main>
      {/* send message */}
      <SendMessage />
      <span ref={scroll}></span>
    </div>
  );
}

export default Chat;
