import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../NoteReducer/reducerslice";

const Input = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleAdd=(e)=>{
    e.preventDefault();
    value && dispatch(addTodo(value));
    setValue("");
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          className="sm:p-3 p-2.5 md:pr-96 sm:pr-60 rounded-md outline-none border-2 border-gray-200"
          type="text"
          placeholder="Add Todo Here.."
          value={value}
          onChange={handleChange}
        />
        <button
        onClick={handleAdd}
        className="btn py-2.5 px-2.5 rounded-md sm:p-3.5 bg-sky-500 hover:bg-transparent hover:text-sky-500 hover:border-sky-500 hover:border-2 transition-all ease-out">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Input;
