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
import { useState } from "react";
import { addModule, deleteModule, editModule, updateModule } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector(
    (state: AppRootState) => state.modulesReducer
  );
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state: AppRootState) => state.accountReducer);
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
  return (
    <div className="w-100">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModuleHelper}
        isFaculty={isFaculty}
      />
      <br />
      <br />
      <br />
      <br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: Module) => module.course === courseId)
          .map((module: Module) => (
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
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
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
                  deleteModule={(moduleId: string) =>
                    dispatch(deleteModule(moduleId))
                  }
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
