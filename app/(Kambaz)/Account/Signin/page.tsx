"use client";
import Link from "next/link";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as db from "../../Database";
import { setCurrentUser } from "../reducer";
import { redirect } from "next/navigation";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState<db.Credentials>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };
  return (
    <div>
      <div id="wd-signin-screen" style={{ width: "400px" }}>
        <h3>Sign in</h3>
        <FormControl
          id="wd-username"
          placeholder="username"
          className="mb-2"
          defaultValue={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <br />
        <FormControl
          id="wd-password"
          placeholder="password"
          type="password"
          className="mb-2"
          defaultValue={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <br />
        <Button
          id="wd-signin-btn"
          className="btn btn-primary w-100 mb-2"
          onClick={signin}
        >
          Sign in{" "}
        </Button>
        <br />
        <Link id="wd-signup-link" href="/Account/Signup">
          Sign up
        </Link>
      </div>

      <div className="mt-5">
        <h5 className="mb-3">Team Members</h5>
        <ul className="list-unstyled">
          <li>Ankit Bando</li>
          <li>Atul Kumar Tiwary</li>
          <li>Poorna Abhijith Patel</li>
          <li>Yu Ye</li>
        </ul>

        <h5 className="mb-3 mt-4">GitHub Repositories</h5>
        <div className="mb-2">
          <strong>Frontend:</strong>{" "}
          <a 
            href="https://github.com/Ank7Tz/Kambaz-next-js/tree/project" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary"
          >
            https://github.com/Ank7Tz/Kambaz-next-js/tree/project
          </a>
        </div>
        <div>
          <strong>Backend:</strong>{" "}
          <a 
            href="https://github.com/Ank7Tz/kambaz-node-server-app/tree/project" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary"
          >
            https://github.com/Ank7Tz/kambaz-node-server-app/tree/project
          </a>
        </div>
      </div>

      
    </div>
  );
}
