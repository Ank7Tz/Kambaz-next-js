"use client";

import { useState } from "react";
import { Form } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

export default function WorkingWithModule() {
  const [module, setModule] = useState<{
    id: string;
    name: string;
    description: string;
    course: string;
  }>({
    id: "",
    name: "Module - Learning Express",
    description: "learning backend development",
    course: "",
  });
  return (
    <div id="wd-working-with-module">
      <h2>Working with module</h2>
      <h4>Modifying Module Name</h4>
      <a
        id="wd-update-moduel-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name{" "}
      </a>
      <Form.Control
        className="w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <hr />
      <a
        id="wd-update-moduel-description"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description{" "}
      </a>
      <Form.Control
        type="textarea"
        className="w-50"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <hr />
      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />
      <h4>Retrieving Module Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module/name`}
      >
        Get Name
      </a>
    </div>
  );
}
