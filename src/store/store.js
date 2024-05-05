import reducerslice from "../NoteReducer/reducerslice";
import { configureStore } from "@reduxjs/toolkit";


const store=configureStore({reducer:reducerslice});

export default store;