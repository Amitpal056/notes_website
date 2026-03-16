import React from "react";

const Cardnotes = (props) => {

    const deleteNote = (idx) => {
        props.onSendData(idx);
    }
    
  return (
      <div className=" flex relative  flex-col min-w-40 break-all max-w-40 h-50 bg-white bg-center p-2 rounded-2xl bg-[url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/notes-template-design-9d18fb23558d6331c1f545bcb17fd6c3_screen.jpg?ts=1645871443)] ">
        <h1 className="text-2xl text-amber-800 text-wrap font-bold leading-tight">
          {props.val}
        </h1>
        <p className=" text-fuchsia-950 text-wrap leading-tight"> {props.det} </p>
        <button onClick={() => deleteNote(props.index)}  className="bg-red-400 rounded-2xl pl-2 pr-2 bottom-2 absolute active:scale-95">
          Delete
        </button>
      </div>

  );
};

export default Cardnotes;
