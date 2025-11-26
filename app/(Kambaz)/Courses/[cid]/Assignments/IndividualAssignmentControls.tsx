import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAssignment } from "./reducer";
import { Button, Modal } from "react-bootstrap";
import { AppRootState } from "@/app/(Kambaz)/store";
import { deleteAssignment } from "./client";

export default function IndividualAssignmentControls({
  courseId,
  assignId,
  assignTitle,
  onDeleteCallback,
}: {
  courseId: string;
  assignId: string;
  assignTitle: string;
  onDeleteCallback: () => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const { currentUser } = useSelector(
    (state: AppRootState) => state.accountReducer
  );

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const deleteHelper = async() => {
    await deleteAssignment(courseId, assignId);
    onDeleteCallback();
  }

  const handleConfirmDelete = () => {
    // dispatch(removeAssignment(assignId));
    deleteHelper();
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="pt-2">
      <span className="me-3 pe-2 position-relative">
        {currentUser?.role === "FACULTY" ? <FaTrash className="me-3 fs-5" onClick={handleDeleteClick} /> : ""}
        <FaCheckCircle
          style={{ top: "2px" }}
          className="text-success me-1 position-absolute fs-5"
        />
      </span>
      <IoEllipsisVertical className="ms-3 fs-4 position-relative float-right" />
      <Modal show={showModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>{assignTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
