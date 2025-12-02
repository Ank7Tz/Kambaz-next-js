"use client";

import { Table, Button, Modal } from "react-bootstrap";
import {
  FaUserCircle,
  FaPlus,
  FaEdit,
  FaTrash,
  FaUserPlus,
  FaUserTimes,
} from "react-icons/fa";
import * as db from "../../../../Database";
import { useParams } from "next/navigation";
import {
  addToCourse,
  getAllUserForCourse,
  removeUserFromCourse,
  updateUser,
  createNewUser,
  deleteUser,
} from "../client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/(Kambaz)/store";
import AddUserModal from "../AddUserModal";
import CreateUserModal from "../CreateUserModal";
import EditUserModal from "../EditUserModal";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const [users, setUsers] = useState<db.User[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const [userToEdit, setUserToEdit] = useState<db.User | null>(null);
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

  const handleCreateUserSubmit = async (user: Partial<db.User>) => {
    try {
      console.log("Creating and adding user to course:", user);
      const newUser = await createNewUser(user as db.User);

      console.log("user created - " + newUser);
      if (courseId && newUser._id) {
        console.log("I am here");
        await addToCourse(courseId, newUser._id);
      }

      await fetchAllUsers();

      setShowCreateModal(false);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleAddUserSubmit = async (userId: string) => {
    console.log("Adding user:", userId);
    if (courseId) {
      await addToCourse(courseId, userId);
      fetchAllUsers();
    }
  };

  const handleUpdateUser = (user: db.User) => {
    setUserToEdit(user);
    setShowEditModal(true);
  };

  const handleEditUserSave = async (updatedUser: db.User) => {
    try {
      console.log("Saving updated user:", updatedUser);
      await updateUser(updatedUser._id, updatedUser);
      await fetchAllUsers();
      setShowEditModal(false);
      setUserToEdit(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleUnenrollUser = async (userId: string) => {
    console.log("Unenroll user clicked for:", userId);
    if (courseId) {
      await removeUserFromCourse(courseId, userId);
      fetchAllUsers();
    }
  };

  const handleDeleteClick = (userId: string) => {
    setUserToDelete(userId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (userToDelete) {
      try {
        console.log("Delete user clicked for:", userToDelete);
        await deleteUser(userToDelete);
        await fetchAllUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
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

      <EditUserModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        onSave={handleEditUserSave}
        user={userToEdit}
      />

      <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this user? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {isFaculty && (
        <div className="mb-3 d-flex justify-content-end gap-2">
          <Button variant="success" onClick={handleCreateUser}>
            <FaUserPlus className="me-2" />
            Create User
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
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
                    variant="secondary"
                    size="sm"
                    onClick={() => handleUnenrollUser(user._id)}
                    className="me-2"
                  >
                    <FaUserTimes />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteClick(user._id)}
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
