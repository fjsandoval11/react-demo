import React, { useState } from "react";
import ListDisplay from "./ListDisplay.jsx";

const AddTask = () => {
  const [input, setInput] = useState(" ");
  const [list, setList] = useState([])

  const handleClick = () => {
    setList([...list, input])
  }


  return (
    <div>
      <h1>Add task</h1>
      <input type='text' onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Add task</button>
      <ListDisplay list={list}/>
    </div>
  );
};

export default AddTask;
