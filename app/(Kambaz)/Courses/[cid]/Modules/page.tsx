import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
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

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}