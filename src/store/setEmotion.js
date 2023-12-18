import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const setEmotion = createSlice({
    name: "emotion",
    initialState: {
        actions: [],        // * \\
        emotions: [],       // * \\
        emotionImage: "",   // * \\
        date: " ",           // * \\
        emotionText: "",     // * \\
        users: [],
        notes: [" "],

    },
    reducers: {
        addEmotion(state, action) {
            // !state.emotions.includes(action.payload) && state.emotions.push(action.payload);

            if (state.emotions.includes(action.payload)) {
                state.emotions = state.emotions.filter(e => e !== action.payload)
            }

            else {
                state.emotions.push(action.payload);
            }
        },

        clearData(state, action) {
            state.actions = [];       
            state.emotions = [];          
            state.date = "";          
            state.emotionText = "";
            state.users = [];
            state.notes = [];
        },

        clearState(state, action) {
            state.actions = useState()
            state.emotions = useState()         
            state.emotionText = useState();
        },

        setAction(state, action) {
            state.actions = action.payload;
        },

        setEmotionImage(state, action) {
            state.emotionImage = action.payload;
        },

        addAction(state, action) {
            // !state.actions.includes(action.payload) && state.actions.push(action.payload);

            if (state.actions.includes(action.payload)) {
                state.actions = state.actions.filter(a => a !== action.payload)
            }

            else {
                state.actions.push(action.payload);
            }
        },

        setDate(state, action) {
            state.date = action.payload;
        },

        setEmotionText(state, action) {
            state.emotionText = action.payload;
        },

    }
})

export const {addEmotion, setAction, addAction, setEmotionImage, clearData, setDate, setEmotionText, clearState } = setEmotion.actions;
export default setEmotion.reducer; 