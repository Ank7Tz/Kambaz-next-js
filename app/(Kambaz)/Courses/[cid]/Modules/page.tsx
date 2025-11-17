"use client";

import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControlsButtons from "./ModulesControlsButton";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../../../store";
import { Lesson, Module } from "../../../Database";
import { useEffect, useState } from "react";
import {
  addModule,
  deleteModule,
  editModule,
  setModules,
  updateModule,
} from "./reducer";
import { v4 as uuidv4 } from "uuid";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector(
    (state: AppRootState) => state.modulesReducer
  );
  const courseId = Array.isArray(cid) ? cid[0] : !cid ? "" : cid;
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { _id: "", name: moduleName, course: courseId } as Module;
    const module = await client.createModuleForCourse(courseId, newModule);
    dispatch(setModules([...modules, module]));
  };

  const { currentUser } = useSelector(
    (state: AppRootState) => state.accountReducer
  );
  const isFaculty = currentUser.role === "FACULTY";
  const addModuleHelper = () => {
    dispatch(
      addModule({
        _id: uuidv4(),
        name: moduleName,
        course: courseId ? courseId : "-1",
      })
    );
    setModuleName("");
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  const onUpdateModule = async (module: Module) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) =>
      m._id === module._id ? module : m
    );
    dispatch(setModules(newModules));
  };

  return (
    <div className="w-100">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={onCreateModuleForCourse}
        isFaculty={isFaculty}
      />
      <br />
      <br />
      <br />
      <br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: Module) => (
          <ListGroup.Item
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <ModulesControlsButtons
                moduleId={module._id}
                editModule={(moduleId: string) =>
                  dispatch(editModule(moduleId))
                }
                deleteModule={(moduleId: string) => onRemoveModule(moduleId)}
                isFaculty={isFaculty}
              />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: Lesson) => (
                  <ListGroup.Item
                    key={lesson._id}
                    className="wd-lesson p-3 ps-1"
                  >
                    <BsGripVertical />
                    {lesson.name}
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
