/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { setAssignments } from "../reducer";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import * as client from "../../../client";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const router = useRouter();
  const search = useSearchParams();
  const editId = search.get("id") || "";
  const dispatch = useDispatch();
  const { assignments } = useSelector((s: any) => s.assignmentsReducer);

  const existing = useMemo(
    () => assignments.find((a: any) => a._id === editId),
    [assignments, editId]
  );

  const [form, setForm] = useState<any>({
    title: "",
    description: "",
    points: 100,
    assignmentGroup: "ASSIGNMENTS",
    displayGradeAs: "Percentage",
    submissionType: "Online",
    due: "",
    available: "",
    until: "",
  });

  useEffect(() => {
    if (existing) {
      setForm({
        title: existing.title || "",
        description: existing.description || "",
        points: existing.points || 100,
        assignmentGroup: existing.assignmentGroup || "ASSIGNMENTS",
        displayGradeAs: existing.displayGradeAs || "Percentage",
        submissionType: existing.submissionType || "Online",
        due: existing.due || "",
        available: existing.available || "",
        until: existing.until || "",
      });
    }
  }, [existing]);

  const save = async () => {
    try {
      if (existing) {
        console.log("Updating assignment:", { ...existing, ...form, course: cid });
        const updatedAssignment = await client.updateAssignment({ ...existing, ...form, course: cid });
        console.log("Received updated assignment:", updatedAssignment);
        const newAssignments = assignments.map((a: any) =>
          a._id === updatedAssignment._id ? updatedAssignment : a
        );
        console.log("Dispatching setAssignments with:", newAssignments);
        dispatch(setAssignments(newAssignments));
      } else {
        const newAssignment = await client.createAssignmentForCourse(cid as string, { ...form, course: cid });
        dispatch(setAssignments([...assignments, newAssignment]));
      }
      router.push(`/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save assignment. Please try again.");
    }
  };

  const cancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor" className="w-100" style={{ maxWidth: 720 }}>
      <h2>{existing ? "Edit Assignment" : "New Assignment"}</h2>
      <Form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Assignment Name</label>
          <FormControl
            placeholder="Assignment Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <FormControl
            as="textarea"
            rows={4}
            placeholder="Enter assignment description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Points</label>
          <FormControl
            type="number"
            value={form.points}
            onChange={(e) => setForm({ ...form, points: parseInt(e.target.value || "100", 10) })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Assignment Group</label>
          <Form.Select
            value={form.assignmentGroup}
            onChange={(e) => setForm({ ...form, assignmentGroup: e.target.value })}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className="form-label">Display Grade as</label>
          <Form.Select
            value={form.displayGradeAs}
            onChange={(e) => setForm({ ...form, displayGradeAs: e.target.value })}
          >
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
            <option value="Letter Grade">Letter Grade</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className="form-label">Submission Type</label>
          <Form.Select
            value={form.submissionType}
            onChange={(e) => setForm({ ...form, submissionType: e.target.value })}
          >
            <option value="Online">Online</option>
            <option value="Paper">On Paper</option>
            <option value="External Tool">External Tool</option>
            <option value="No Submission">No Submission</option>
          </Form.Select>
        </div>

        <div className="mb-3">
          <label className="form-label">Assign</label>
          <div className="border rounded p-3">
            <div className="mb-3">
              <label className="form-label fw-bold">Due</label>
              <FormControl
                type="date"
                value={form.due}
                onChange={(e) => setForm({ ...form, due: e.target.value })}
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Available from</label>
                <FormControl
                  type="date"
                  value={form.available}
                  onChange={(e) => setForm({ ...form, available: e.target.value })}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Until</label>
                <FormControl
                  type="date"
                  value={form.until}
                  onChange={(e) => setForm({ ...form, until: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="d-flex justify-content-end gap-2 mt-3">
          <Button type="button" variant="secondary" onClick={cancel}>Cancel</Button>
          <Button type="button" variant="danger" onClick={save}>Save</Button>
        </div>
      </Form>
    </div>
  );
}
