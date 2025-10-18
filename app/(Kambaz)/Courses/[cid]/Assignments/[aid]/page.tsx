/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import Link from "next/link";

export default function AssignmentEditor() {
  const { cid, aid } = useParams() as { cid: string; aid: string };
  const assignment: any =
    (db as any).assignments?.find((a: any) => a._id === aid && a.course === cid) || {};

  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label"><b>Assignment Name</b></label>
        <input id="wd-name" defaultValue={assignment.title ?? ""} className="form-control" />
      </div>

      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={15}
          defaultValue={`
The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-points" className="form-label">Points</label>
        <input id="wd-points" defaultValue={assignment.points ?? 100} className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        <select id="wd-group" defaultValue={assignment.group ?? "ASSIGNMENTS"} className="form-select">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        <select id="wd-display-grade-as" defaultValue={assignment.displayAs ?? "PERCENTAGE"} className="form-select">
          <option value="PERCENTAGE">Percentage</option>
          <option value="LETTER">Letter</option>
          <option value="POINTS">Points</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        <select id="wd-submission-type" defaultValue={assignment.submissionType ?? "Online"} className="form-select mb-3">
          <option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
        </select>

        <div className="border p-3">
          <div className="mb-2"><b>Online Entry Options</b></div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-text-entry" />
            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
            <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
            <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
            <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="wd-file-upload" />
            <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="border p-3 mb-4">
        <div className="mb-3">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
          <input id="wd-assign-to" placeholder="Everyone" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
          <input
            id="wd-due-date"
            type="date"
            defaultValue={assignment.due ?? ""}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input
            id="wd-available-from"
            type="date"
            defaultValue={assignment.available ?? ""}
            className="form-control"
          />
        </div>

        <div>
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input
            id="wd-available-until"
            type="date"
            defaultValue={assignment.availableUntil ?? ""}
            className="form-control"
          />
        </div>
      </div>

      <hr />

      <div className="text-end">
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}
