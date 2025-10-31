/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((s: any) => s.assignmentsReducer);
  const { currentUser } = useSelector((s: any) => s.accountReducer);
  const items = assignments.filter((a: any) => a.course === cid);
  const isFaculty = currentUser?.role === "FACULTY";

  const handleDelete = (assignmentId: string, assignmentTitle: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove the assignment "${assignmentTitle}"?`
    );
    if (confirmed) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Assignments</h2>
        <Button
          id="wd-add-assignment"
          variant="danger"
          onClick={() => router.push(`/Courses/${cid}/Assignments/Editor`)}
        >
          + Assignment
        </Button>
      </div>
      <ListGroup>
        {items.map((a: any) => (
          <ListGroupItem key={a._id} className="d-flex justify-content-between align-items-center">
            <div
              style={{ cursor: 'pointer', flex: 1 }}
              onClick={() => router.push(`/Courses/${cid}/Assignments/Editor?id=${a._id}`)}
            >
              <div className="fw-semibold">{a.title}</div>
              <div className="text-muted small">Due {a.due} | {a.points} pts</div>
            </div>
            <div className="d-flex gap-2">
              <Button
                variant="danger"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(a._id, a.title);
                }}
                id="wd-delete-assignment"
              >
                <FaTrash />
              </Button>
              <Button
                variant="warning"
                size="sm"
                onClick={() => router.push(`/Courses/${cid}/Assignments/Editor?id=${a._id}`)}
                id="wd-edit-assignment"
              >
                Edit
              </Button>
            </div>
          </ListGroupItem>
        ))}
        {items.length === 0 && <ListGroupItem>No assignments yet.</ListGroupItem>}
      </ListGroup>
    </div>
  );
}
