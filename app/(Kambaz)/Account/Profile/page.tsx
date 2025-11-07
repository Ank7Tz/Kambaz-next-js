"use client";
import { useEffect, useState } from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../../store";
import { redirect } from "next/navigation";
import type { Profile } from "../../Database";
import { setCurrentUser } from "../reducer";
export default function Profile() {
  const [profile, setProfile] = useState<Profile>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "",
  });
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: AppRootState) => state.accountReducer
  );
  const formatDateForInput = (
    date: Date | string | null | undefined
  ): string => {
    if (!date) return "";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toISOString().split("T")[0]; // Returns YYYY-MM-DD
  };
  const fetchProfile = () => {
    if (!currentUser) {
      return redirect("/Account/Signin");
    } else {
      setProfile({
        username: currentUser.username,
        password: currentUser.password,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email ? currentUser.email : "",
        dob: currentUser.dob ? currentUser.dob : "",
        role: currentUser.role,
      });
    }
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div id="wd-profile-screen" style={{ width: "400px" }}>
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl
            id="wd-username"
            placeholder="username"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            className="mb-2"
          />
          <FormControl
            id="wd-password"
            placeholder="password"
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
            type="password"
            className="mb-2"
          />
          <FormControl
            id="wd-firstname"
            placeholder="First Name"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
            className="mb-2"
          />
          <FormControl
            id="wd-lastname"
            placeholder="Last Name"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
            className="mb-2"
          />
          <FormControl
            id="wd-dob"
            type="date"
            className="mb-2"
            value={formatDateForInput(profile.dob)}
            onChange={(e) =>
              setProfile({ ...profile, dob: new Date(e.target.value) })
            }
          />
          <FormControl
            id="wd-email"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="mb-2"
          />
          <Form.Select
            id="wd-role"
            value={profile.role}
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
          <Button onClick={signout} className="btn btn-danger w-100 mb-2">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
