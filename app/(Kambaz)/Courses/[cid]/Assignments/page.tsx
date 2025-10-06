"use client";

import Link from "next/link";
import { InputGroup, ListGroup, Form, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControls from "./AssignmentControls";
import { IoSearchOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { MdOutlineAssignment } from "react-icons/md";
import IndividualAssignmentControls from "./IndividualAssignmentControls";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <InputGroup
        id="wd-search-assignment"
        className="float-start mb-3 me-5"
        style={{ width: "250px" }}
      >
        <InputGroup.Text className="border-end-0 bg-white">
          <IoSearchOutline className="fs-5" />
        </InputGroup.Text>
        <Form.Control className="border-start-0 fs-5" placeholder="Search..." />
      </InputGroup>
      <Button
        variant="secondary"
        className="p-2 me-2 fs-6 btn-secondary d-block float-end"
        id="wd-add-assignment-group"
      >
        <GoPlus className="fs-6" />
        Group
      </Button>
      <Button
        variant="secondary"
        className="p-2 me-2 fs-6 btn-secondary d-block float-end"
        id="wd-add-assignment"
      >
        <GoPlus className="fs-6" />
        Assignment
      </Button>
      <br />
      <br />
      <br />
      <br />
      <ListGroup id="wd-assignment-list">
        <ListGroup.Item variant="secondary" className="fs-3 p-3 bg-secondary">
          <div>
            <BsGripVertical className="me-2 fs-5" />
            <IoMdArrowDropdown className="me-1 fs-5" />
            <span id="wd-assignments-title" className="fs-4">
              ASSIGNMENTS
            </span>
            <AssignmentControls />
          </div>
        </ListGroup.Item>
        <ListGroup>
          <ListGroup.Item
            id="wd-assignment-list-item"
            className="wd-assignment"
          >
            <div className="d-flex align-items-center">
              <BsGripVertical
                className="me-2"
                style={{ fontSize: "1.75rem", minWidth: "1.75rem" }}
              />
              <MdOutlineAssignment
                className="me-2 text-success"
                style={{ fontSize: "1.75rem", minWidth: "1.75rem" }}
              />
              <div className="d-flex flex-column flex-grow-1 p-2">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="text-decoration-none text-black wd-assignment-link"
                >
                  A1 - ENV + HTML
                </Link>
                <div>
                  <span className="text-danger wd-assignment-list-item-modules">
                    Multiple Modules
                  </span>
                  <span className="ms-2 me-2">|</span>
                  <span className="fw-bold ">Not Available Until </span>
                  <span className="wd-assignment-list-item-time-from">
                    May 6 at 12:00 AM
                  </span>
                  <span className="ms-2 me-2">|</span>
                  <span className="wd-assignment-list-item-time-due">
                    Due May 13 at 11:59 PM
                  </span>
                  <span className="ms-2 me-2">|</span>
                  <span className="wd-assignment-list-item-points">
                    100 pts
                  </span>
                </div>
              </div>
              <IndividualAssignmentControls />
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            id="wd-assignment-list-item"
            className="wd-assignment"
          >
            <div className="d-flex align-items-center">
              <BsGripVertical
                className="me-2"
                style={{ fontSize: "1.75rem", minWidth: "1.75rem" }}
              />
              <MdOutlineAssignment
                className="me-2 text-success"
                style={{ fontSize: "1.75rem", minWidth: "1.75rem" }}
              />
              <div className="d-flex flex-column flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="text-decoration-none text-black wd-assignment-link"
                >
                  A2 - CSS + BOOTSTRAP
                </Link>
                <div>
                  <span className="text-danger wd-assignment-list-item-modules">
                    Multiple Modules
                  </span>
                  <span className="ms-2 me-2">|</span>
                  <span className="fw-bold">Not Available Until </span>
                  <span className="wd-assignment-list-item-time-from">
                    May 13 at 12:00 AM
                  </span>
                  <span className="ms-2 me-2">|</span>
                  <span className="wd-assignment-list-item-time-due">
                    Due May 20 at 11:59 PM
                  </span>
                  <span className="ms-2 me-2">|</span>
                  <span className="wd-assignment-list-item-points">
                    100 pts
                  </span>
                </div>
              </div>
              <IndividualAssignmentControls />
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            id="wd-assignment-list-item"
            className="wd-assignment"
          >
            <div className="d-flex align-items-center">
              <BsGripVertical
                className="me-2"
                style={{ fontSize: "1.75rem", minWidth: "1.75rem" }}
              />
              <MdOutlineAssignment
                className="me-2 text-success"
                style={{ fontSize: "1.75rem", minWidth: "1.75rem" }}
              />
              <div className="d-flex flex-column flex-grow-1">
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="text-decoration-none text-black wd-assignment-link"
                >
                  A3 - JAVASCRIPT + REACT
                </Link>
                <div>
                  <span className="text-danger wd-assignment-list-item-modules">
                    Multiple Modules
                  </span>
                  <span className="ms-2 me-2">|</span>
                  <span className="fw-bold">Not Available Until </span>
                  <span className="wd-assignment-list-item-time-from">
                    May 20 at 12:00 AM
                  </span>
                  <span className="ms-2 me-2">|</span>
                  <span className="wd-assignment-list-item-time-due">
                    Due May 27 at 11:59 PM
                  </span>
                  <span className="ms-2 me-2">|</span>
                  <span className="wd-assignment-list-item-points">
                    100 pts
                  </span>
                </div>
              </div>
              <IndividualAssignmentControls />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </ListGroup>
    </div>
  );
}
