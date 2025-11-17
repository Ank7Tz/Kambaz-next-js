"use client";

import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as db from "../../../Database";

interface CreateUserModalProps {
  show: boolean;
  onHide: () => void;
  onCreateUser: (user: Partial<db.User>) => void;
}

export default function CreateUserModal({
  show,
  onHide,
  onCreateUser,
}: CreateUserModalProps) {
  const [formData, setFormData] = useState<Partial<db.User>>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    loginId: "",
    section: "S101",
    role: "STUDENT",
    lastActivity: "",
    totalActivity: "00:00:00",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating user:", formData);
    onCreateUser(formData);
  };

  const handleClose = () => {
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      loginId: "",
      section: "S101",
      role: "STUDENT",
      lastActivity: "",
      totalActivity: "00:00:00",
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Create New User</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Enter first name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Enter last name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username *</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Login ID *</Form.Label>
            <Form.Control
              type="text"
              name="loginId"
              value={formData.loginId}
              onChange={handleChange}
              required
              placeholder="Enter login ID"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Section *</Form.Label>
            <Form.Control
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              required
              placeholder="Enter section"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role *</Form.Label>
            <Form.Select name="role" value={formData.role} onChange={handleChange} required>
              <option value="STUDENT">Student</option>
              <option value="TA">Teaching Assistant</option>
              <option value="FACULTY">Faculty</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob as string}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Create User
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
