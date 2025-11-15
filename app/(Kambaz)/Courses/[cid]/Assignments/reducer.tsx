/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: a }) => {
      const newAssignment = { ...a, _id: uuidv4() };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    updateAssignment: (state, { payload: a }) => {
      state.assignments = state.assignments.map((x: any) =>
        x._id === a._id ? a : x
      ) as any;
    },
    deleteAssignment: (state, { payload: id }) => {
      state.assignments = state.assignments.filter((x: any) => x._id !== id) as any;
    },
    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments;
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
