import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: db.assignments,
    assignmentsSlice: { title: "New Assignment 123", description: "New Description" },
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignments) => assignments._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignments) => {
                if (assignmentsSlice._id === assignmentsSlice.payload._id) {
                    return action.payload;
                } else {
                    return assignments;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignments = action.payload;
        },
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment }
    = assignmentsSlice.actions;
export default assignmentsSlice.reducer;