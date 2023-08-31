"use client";
import { useState } from "react";
import Encrypt from "./Encrypt";
import Decrypt from "./Decrypt";

const Main = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <h1 className="text-3xl font-bold shadow">
        {toggle ? "Text to Emojis" : "Emojis to Text"}
      </h1>
      <div className="my-2 flex flex-row justify-around border py-3 shadow">
        <button className="rounded border p-3" onClick={() => setToggle(true)}>
          Encrypt Text
        </button>
        <button className="rounded border p-3" onClick={() => setToggle(false)}>
          Decrypt Emojis
        </button>
      </div>
      {toggle ? <Encrypt /> : <Decrypt />}
    </>
  );
};

export default Main;
