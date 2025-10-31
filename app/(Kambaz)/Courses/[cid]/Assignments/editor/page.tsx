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
import { addAssignment, updateAssignment } from "../reducer";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
    due: "",
    available: "",
  });

  useEffect(() => {
    if (existing) {
      setForm({
        title: existing.title || "",
        description: existing.description || "",
        points: existing.points || 0,
        due: existing.due || "",
        available: existing.available || "",
      });
    }
  }, [existing]);

  const save = () => {
    if (existing) {
      dispatch(updateAssignment({ ...existing, ...form, course: cid }));
    } else {
      dispatch(addAssignment({ ...form, course: cid }));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const cancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignment-editor" className="w-100" style={{ maxWidth: 720 }}>
      <h2>{existing ? "Edit Assignment" : "New Assignment"}</h2>
      <Form className="mt-3">
        <FormControl
          className="mb-2"
          placeholder="Assignment Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <FormControl
          className="mb-2"
          as="textarea"
          rows={4}
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <FormControl
          className="mb-2"
          type="number"
          placeholder="Points"
          value={form.points}
          onChange={(e) => setForm({ ...form, points: parseInt(e.target.value || "0", 10) })}
        />
        <div className="mb-2">
          <label className="form-label">Available From</label>
          <FormControl
            type="date"
            value={form.available}
            onChange={(e) => setForm({ ...form, available: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Due Date</label>
          <FormControl
            type="date"
            value={form.due}
            onChange={(e) => setForm({ ...form, due: e.target.value })}
          />
        </div>
        <div className="d-flex justify-content-end gap-2 mt-3">
          <Button type="button" variant="secondary" onClick={cancel}>Cancel</Button>
          <Button type="button" variant="primary" onClick={save}>Save</Button>
        </div>
      </Form>
    </div>
  );
}
