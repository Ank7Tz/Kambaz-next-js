"use client";

import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as db from "../../../Database";

interface EditUserModalProps {
  show: boolean;
  onHide: () => void;
  onSave: (user: db.User) => void;
  user: db.User | null;
}

export default function EditUserModal({
  show,
  onHide,
  onSave,
  user,
}: EditUserModalProps) {
  const [formData, setFormData] = useState<Partial<db.User>>({
    firstName: "",
    lastName: "",
    section: "",
    role: "STUDENT",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        section: user.section,
        role: user.role,
      });
    }
  }, [user]);

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
    if (user) {
      // TODO: Implement update user logic
      const updatedUser = {
        ...user,
        ...formData,
      };
      console.log("Updating user:", updatedUser);
      onSave(updatedUser as db.User);
    }
  };

  const handleClose = () => {
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
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
            <Form.Select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="STUDENT">Student</option>
              <option value="TA">Teaching Assistant</option>
              <option value="FACULTY">Faculty</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
