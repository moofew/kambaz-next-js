import { useState } from "react";
import { useParams } from "next/navigation";
import { editModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../../client";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { ListGroup } from "react-bootstrap";

interface Module {
  _id: string;
  name: string;
  course: string;
}

interface ModulesState {
  modules: Module[];
}

interface RootState {
  modulesReducer: ModulesState;
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m) => m._id !== moduleId)));
  };


  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    // eslint-disable-next-line @next/next/no-assign-module-variable
    const module = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, module]));
  };

  return (
    <div>
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={onCreateModuleForCourse} />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module) => (
          <div key={module._id}>
            <ModuleControlButtons
              moduleId={module._id}
              deleteModule={(moduleId) => onRemoveModule(moduleId)}
              editModule={(moduleId) => dispatch(editModule(moduleId))}
            />
          </div>
        ))}
      </ListGroup>
    </div>
  );
}