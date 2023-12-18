import { configureStore, combineReducers } from "@reduxjs/toolkit";
import setEmotion from "./setEmotion";

const rootReducer = combineReducers({
    emotion: setEmotion
})

export const store = configureStore({reducer: rootReducer});