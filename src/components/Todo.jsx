import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../NoteReducer/reducerslice";

const Todo = (props) => {
  const dispatch=useDispatch();

  const [text, setText] = useState(props.text);
  const [isEditable, setIsEditable] = useState(false);
  const [isCompleted, setIsCompleted] = useState(props.completed);
  const textref = useRef(null);

  useEffect(() => {
    setHeight();
  }, [text]);

  const setHeight = () => {
    if (textref.current) {
      textref.current.style.height = "26px";
      textref.current.style.height = `${textref.current.scrollHeight}px`;
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const edit=(e,id,newtext)=>{
    e.preventDefault();
    if(isEditable){
      dispatch(updateTodo({id,newtext}))
      setIsEditable((prev)=>!prev);
    }
    else{
      setIsEditable(true);
      textref.current.focus();
      textref.current.setSelectionRange(text.length,text.length);
    }
  }


  return (
    <div>
      <div
        className={`todo sm:m-5 sm:mb-0 mt-3 rounded-md ${isCompleted?"bg-gray-200": "bg-white"} p-3 flex justify-between items-center relative sm:text-2xl`}
        style={{ width: "600px" }}
      >
        <div className="input flex items-center flex-auto w-40">
          <input
            className="mr-4"
            type="checkbox"
            onChange={() => {setIsCompleted((prev) => !prev); dispatch(toggleTodo(props.id))}}
            checked={isCompleted}
            width={"50px"}
          />
          <textarea
            className={`outline-none ${isCompleted?"bg-gray-200": "bg-white"} border-none resize-none flex-auto mr-6 pt-0`}
            name=""
            id="text-area"
            ref={textref}
            value={text}
            onChange={handleChange}
            onBlur={setHeight}
            readOnly={!isEditable}
            style={{
              textDecoration: `${isCompleted ? "line-through" : "none"}`,
            }}
          ></textarea>
        </div>
        <div className="icons flex justify-between">
        {!isCompleted && !isEditable && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3 cursor-pointer"
            onClick={edit}
            aria-disabled={isCompleted}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>}
          {!isCompleted && isEditable && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3 cursor-pointer"
            onClick={(e)=>edit(e,props.id,text)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={(e)=>{e.preventDefault(); dispatch(deleteTodo(props.id))}}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Todo;
