/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { Button } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      <div className="d-flex justify-content-end align-items-center mb-3 gap-2">
        <Button variant="secondary" id="wd-collapse-all">
          Collapse All
        </Button>
        
        <Button variant="secondary" id="wd-view-prog">
          View Progress
        </Button>
        
        <select id="wd-publish" className="form-select" style={{ width: "auto" }}>
          <option value="Publish All">Publish all modules and items</option>
          <option value="Publish Modules">Publish modules only</option>
          <option value="Unpublish All">Unpublish all modules and items</option>
          <option value="Unpublish Modules">Unpublish modules only</option>
        </select>
        
        <Button variant="danger" id="wd-add-module">
          <FaPlus className="me-2" />
          Module
        </Button>
        
      </div>

      <ListGroup id="wd-modules" className="rounded-0">
              {modules
                .filter((module: any) => module.course === cid)
                .map((module: any) => (
                <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
                  <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
                  </div>
                  {module.lessons && (
                    <ListGroup className="wd-lessons rounded-0">
                      {module.lessons.map((lesson: any) => (
                        <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                          <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                        </ListGroupItem>
                      ))}</ListGroup>
                  )}
                </ListGroupItem>
              ))}
      </ListGroup>
    </div>
  );
}