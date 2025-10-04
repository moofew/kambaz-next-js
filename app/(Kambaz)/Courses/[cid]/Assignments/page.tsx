import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
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

      <div
        className="row p-2"
        style={{
          borderLeft: "5px solid green",
          borderTop: "1px solid lightgray",
          borderRight: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
        }}
      >
        <div className="col">
          <BsGripVertical className="me-2 fs-3" />
          <Link
            href="/Courses/1234/Assignments/123"
            className="fw-bold text-decoration-none text-dark"
          >
            A1 - ENV + HTML
          </Link>
          <div className="small">
            Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts
          </div>
        </div>
        <div className="col text-end">
          <FaCheckCircle className="text-success me-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      <div
        className="row p-2"
        style={{
          borderLeft: "5px solid green",
          borderTop: "1px solid transparent",
          borderRight: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
        }}
      >
        <div className="col">
          <BsGripVertical className="me-2 fs-3" />
          <Link
            href="/Courses/1234/Assignments/123"
            className="fw-bold text-decoration-none text-dark"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <div className="small">
            Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts
          </div>
        </div>
        <div className="col text-end">
          <FaCheckCircle className="text-success me-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      <div
        className="row p-2"
        style={{
          borderLeft: "5px solid green",
          borderTop: "1px solid transparent",
          borderRight: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
        }}
      >
        <div className="col">
          <BsGripVertical className="me-2 fs-3" />
          <Link
            href="/Courses/1234/Assignments/123"
            className="fw-bold text-decoration-none text-dark"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <div className="small">
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts
          </div>
        </div>
        <div className="col text-end">
          <FaCheckCircle className="text-success me-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
    </div>
  );
}
