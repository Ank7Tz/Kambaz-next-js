"use client";

import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as db from "../../../Database";
import { FindUsersByFirstName, FindUserByUserId } from "./client";

interface AddUserModalProps {
  show: boolean;
  onHide: () => void;
  onAddUser: (userId: string) => void;
}

export default function AddUserModal({ show, onHide, onAddUser }: AddUserModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState<"userId" | "firstName">("userId");
  const [filteredUsers, setFilteredUsers] = useState<db.User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      return;
    }

    try {
      let users: db.User[] = [];
      
      if (searchBy === "firstName") {
        users = await FindUsersByFirstName(searchTerm);
      } else {
        users = await FindUserByUserId(searchTerm);
      }
      
      setFilteredUsers(users);
      setSelectedUserId(""); 
    } catch (error) {
      console.error("Error searching for users:", error);
      setFilteredUsers([]);
    }
  };

  const handleAdd = () => {
    if (selectedUserId) {
      onAddUser(selectedUserId);
      handleClose();
    }
  };

  const handleClose = () => {
    setSearchTerm("");
    setSelectedUserId("");
    setFilteredUsers([]);
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add User to Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Search By</Form.Label>
            <Form.Select 
              value={searchBy} 
              onChange={(e) => setSearchBy(e.target.value as "userId" | "firstName")}
            >
              <option value="userId">User ID</option>
              <option value="firstName">First Name</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              {searchBy === "userId" ? "Enter User ID" : "Enter First Name"}
            </Form.Label>
            <div className="d-flex gap-2">
              <Form.Control
                type="text"
                placeholder={searchBy === "userId" ? "Enter user ID..." : "Enter first name..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="secondary" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select User</Form.Label>
            <Form.Select 
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              disabled={filteredUsers.length === 0}
            >
              <option value="">
                {filteredUsers.length === 0 
                  ? "No users found - try searching" 
                  : "Select a user..."}
              </option>
              {filteredUsers.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.firstName} {user.lastName} ({user.loginId}) - {user.role}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button 
          variant="primary" 
          onClick={handleAdd}
          disabled={!selectedUserId}
        >
          Add User
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
