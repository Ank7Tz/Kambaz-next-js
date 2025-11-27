"use client";
import Link from "next/link";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as client from "../client";
import { setCurrentUser } from "../reducer";
import { useRouter } from "next/navigation";
import { User } from "../../Database";

export default function Signin() {
  const [user, setUser] = useState<User>({
    _id: "",
    firstName: "",
    username: "",
    password: "",
    lastName: "",
    loginId: "",
    section: "",
    role: "STUDENT",
    lastActivity: "",
    totalActivity: "",
    dob: "",
    email: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const signup = async () => {
    if (user?.username && user?.password) {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    }
  };

  return (
    <div id="wd-signup-screen" style={{ width: "400px" }}>
      <h3>Sign up</h3>
      <FormControl
        id="wd-username"
        placeholder="username"
        className="mb-2"
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      />
      <br />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <br />
      <Button
        id="wd-signup-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signup}
      >
        Sign up{" "}
      </Button>
      <br />
      <Link id="wd-signin-link" href="/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
