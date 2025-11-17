"use client";

import { Table, Button } from "react-bootstrap";
import { FaUserCircle, FaPlus, FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import * as db from "../../../../Database";
import { useParams } from "next/navigation";
import { addToCourse, getAllUserForCourse, removeUserFromCourse } from "../client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/(Kambaz)/store";
import AddUserModal from "../AddUserModal";
import CreateUserModal from "../CreateUserModal";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const [users, setUsers] = useState<db.User[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { currentUser } = useSelector(
    (state: AppRootState) => state.accountReducer
  );
  const isFaculty = currentUser?.role === "FACULTY";

  const fetchAllUsers = async () => {
    if (courseId) {
      const users = await getAllUserForCourse(courseId);
      setUsers(users);
    }
  };

  const handleAddUser = async () => {
    setShowAddModal(true);
  };

  const handleCreateUser = () => {
    setShowCreateModal(true);
  };

  const handleCreateUserSubmit = (user: Partial<db.User>) => {
    // TODO: Implement create user logic
    console.log("Creating and adding user to course:", user);
  };

  const handleAddUserSubmit = async (userId: string) => {
    console.log("Adding user:", userId);
    if (courseId) {
      await addToCourse(courseId, userId);
      fetchAllUsers();
    }
  };

  const handleUpdateUser = (user: db.User) => {
    console.log("Update user clicked for:", user);
  };

  const handleDeleteUser = async (userId: string) => {
    console.log("Delete user clicked for:", userId);
    if (courseId) {
      await removeUserFromCourse(courseId, userId);
      fetchAllUsers();
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div id="wd-people-table">
      <AddUserModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        onAddUser={handleAddUserSubmit}
      />

      <CreateUserModal
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        onCreateUser={handleCreateUserSubmit}
      />

      {isFaculty && (
        <div className="mb-3 d-flex justify-content-end gap-2">
          <Button
            variant="success"
            onClick={handleCreateUser}
          >
            <FaUserPlus className="me-2" />
            Create User
          </Button>
          <Button
            variant="primary"
            onClick={handleAddUser}
          >
            <FaPlus className="me-2" />
            Add User
          </Button>
        </div>
      )}
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
            {isFaculty && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user: db.User) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName} </span>
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
              {isFaculty && (
                <td className="text-nowrap">
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleUpdateUser(user)}
                    className="me-2"
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
