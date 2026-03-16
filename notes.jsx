import React, { useState } from "react";
import Cardnotes from "./smallc/cardnotes";

const Notes = () => {
  const [task, setTask] = useState([]);
  const [heading, setH] = useState("");
  const [detail, setD] = useState("");

  const formsubmitted = (e) => {
    e.preventDefault();
    setH("");
    setD("");
    const copytask = [...task];
    copytask.push({ heading, detail });
    setTask(copytask);
  };
  const headchange = (e) => {
    setH(e.target.value);
  };
  const detailchange = (e) => {
    setD(e.target.value);
  };

  const deleteCard = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen bg-black">
      <div className="lg:flex justify-around ">
        <form
          onSubmit={(e) => {
            formsubmitted(e);
          }}
          className="text-white flex flex-col mb-5 justify-between lg:w-100 items-center"
        >
          <h1 className="text-4xl mb-5 text-blue-300">Notes Entry</h1>
          <input
            onChange={(e) => {
              headchange(e);
            }}
            type="text"
            value={heading}
            placeholder="Write notes heading"
            className="border-white mb-5 w-full p-1 border-2 rounded"
          />
          <textarea
            onChange={(e) => {
              detailchange(e);
            }}
            value={detail}
            placeholder="Write Details"
            className="border-white h-24 w-full mb-5 border-2 p-2 rounded bg-transparent text-white resize-none"
          />

          <button className="border-white border-2 rounded p-0.5 active:scale-90  bg-gray-700">
            Add Note
          </button>
        </form>
        <div>
          <img
            src="https://previews.123rf.com/images/delavegagaming/delavegagaming2306/delavegagaming230600398/207136788-black-and-white-cartoon-illustration-of-cute-boy-studying-or-learning.jpg"
            alt="not found "
            className="size-70"
          />
        </div>
      </div>
      <h1 className="text-4xl mb-5 text-emerald-700">Notes details</h1>

      <div className="flex flex-wrap  p-5 mt-5 bg-gray-800 gap-7">
        {task.map((vals, index) => {
          return <Cardnotes onSendData={deleteCard} index={index} val={vals.heading} det={vals.detail} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
