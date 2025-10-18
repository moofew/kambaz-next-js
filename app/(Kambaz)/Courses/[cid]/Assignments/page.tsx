"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((a: any) => a.course === cid);

  return (
    <div id="wd-assignments" className="p-3">
      <div className="row mb-4">
        <div className="col">
          <input
            placeholder="🔍 Search..."
            id="wd-search-assignment"
            className="form-control"
          />
        </div>
        <div className="col text-end">
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            + Assignment
          </button>
        </div>
      </div>

      <div className="row border">
        <div className="col fw-bold p-2">
          <div className="row">
            <div className="col">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <span> (40% of Total)</span>
            </div>
            <div className="col text-end">
              <button className="btn btn-light btn-sm border me-2">+</button>
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </div>
      </div>

      {assignments.map((a: any, index: number) => (
        <div
          key={a._id}
          className="row p-2"
          style={{
            borderLeft: "5px solid green",
            borderTop: index === 0 ? "1px solid lightgray" : "1px solid transparent",
            borderRight: "1px solid lightgray",
            borderBottom: "1px solid lightgray",
          }}
        >
          <div className="col">
            <BsGripVertical className="me-2 fs-3" />
            <Link
              href={`/Courses/${cid}/Assignments/${a._id}`}
              className="fw-bold text-decoration-none text-dark"
            >
              {a.title}
            </Link>
            <div className="small">
              Multiple Modules | <b>Not available until</b> {a.available} | <b>Due</b>{" "}
              {a.due} | {a.points}pts
            </div>
          </div>
          <div className="col text-end">
            <FaCheckCircle className="text-success me-2" />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
