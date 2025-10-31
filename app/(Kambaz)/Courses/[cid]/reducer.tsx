/* eslint-disable @typescript-eslint/no-explicit-any */
import * as db from "../../Database";

export type Assignment = {
  _id: string;
  course: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
  availableFrom?: string;
  availableUntil?: string;
};

type State = { assignments: Assignment[] };

const initialState: State = { assignments: db.assignments as unknown as Assignment[] };

export const addAssignment = (assignment: Assignment) => ({
  type: "assignments/add",
  payload: assignment,
});

export const updateAssignment = (assignment: Assignment) => ({
  type: "assignments/update",
  payload: assignment,
});

export const deleteAssignment = (assignmentId: string) => ({
  type: "assignments/delete",
  payload: assignmentId,
});

export default function assignmentsReducer(
  state: State = initialState,
  action: any
): State {
  switch (action.type) {
    case "assignments/add":
      return { assignments: [...state.assignments, action.payload] };
    case "assignments/update":
      return {
        assignments: state.assignments.map((a) =>
          a._id === action.payload._id ? action.payload : a
        ),
      };
    case "assignments/delete":
      return {
        assignments: state.assignments.filter((a) => a._id !== action.payload),
      };
    default:
      return state;
  }
}
