/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { Button, FormControl } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { v4 as uuidv4 } from "uuid";
import ModulesControls from "./ModulesControls";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../../client";

export default function Modules() {
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  const onUpdateModule = async (module: any) => {
    if (!cid) return;
    await client.updateModule(cid as string, module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m);
    dispatch(setModules(newModules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

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
              <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {dispatch(addModule({ name: moduleName, course: cid}));
              setModuleName("")
              }} />
              {modules
                .map((module: any) => (
                <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
                  <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    {!module.editing && module.name}
                    { module.editing && (
                      <FormControl className="w-50 d-inline-block"
                            value={module.name}
                            onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                onUpdateModule({ ...module, editing: false });
                              }
                            }}
                            />
                    )}
                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={(moduleId) => {
                      dispatch(deleteModule(moduleId));
                      }}
                      editModule={(moduleId) => dispatch(editModule(moduleId))}
                      />
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