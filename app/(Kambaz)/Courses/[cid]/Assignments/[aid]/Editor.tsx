"use client";

import { Assignment } from "@/app/(Kambaz)/Database";
import { AppRootState } from "@/app/(Kambaz)/store";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssignment, createAssignment, updateAssignment } from "../client";
import { createImmutableStateInvariantMiddleware } from "@reduxjs/toolkit";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector(
    (state: AppRootState) => state.assignmentReducer
  );
  const router = useRouter();

  const courseId = Array.isArray(cid) ? cid[0] : cid || "";
  const assignmentId = Array.isArray(aid) ? aid[0] : aid || "";
  const today = new Date();
  const sevenDaysLater = new Date();
  sevenDaysLater.setDate(today.getDate() + 7);

  const [assignment, setAssignment] = useState<Assignment>({
    _id: assignmentId,
    title: "new title",
    course: courseId,
    availableFrom: today.toISOString().split('T')[0],
    dueDate: sevenDaysLater.toISOString().split('T')[0],
    availableTill: sevenDaysLater.toISOString().split('T')[0],
    points: 100,
    description: "add desc",
  });

  const [isNewAssignment, setIsNewAssignment] = useState(false);
  const [isNewflag, setIsNewFlag] = useState(false);

  if (assignmentId === "new_assignment" && !isNewflag) {
    setIsNewAssignment(true);
    setIsNewFlag(true);
  }

  const fetchAssignmentHelper = async () => {
    const data = await fetchAssignment(courseId, assignmentId);
    setAssignment(data);
  };

  const createAssignmentHelper = async () => {
    const data = await createAssignment(courseId, assignment);
  };

  const updateAssignmentHelper = async () => {
    const data = await updateAssignment(courseId, assignmentId, assignment);
  };

  useEffect(() => {
    if (!isNewAssignment) {
      fetchAssignmentHelper();
    }
    // const assign = assignments.find((a: Assignment) => a._id === aid);
    // if (assign) {
    //   setAssignment(assign);
    //   setIsNewAssignment(false);
    // }
  }, []);

  const formatDateForInput = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // YYYY-MM-DD
  };

  const dispatch = useDispatch();
  const saveButtonClick = () => {
    if (isNewAssignment) {
      createAssignmentHelper();
      // dispatch(createAssignment(assignment));
    } else {
      // dispatch(updateAssignment(assignment));
      updateAssignmentHelper();
    }
    router.push(`/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="ms-5" style={{ width: "600px" }}>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
              <Form.Control
                id="wd-name"
                value={assignment.title}
                onChange={(e) =>
                  setAssignment({ ...assignment, title: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Control
                as="textarea"
                className="w-100"
                style={{ height: "400px" }}
                value={assignment.description}
                onChange={(e) =>
                  setAssignment({ ...assignment, description: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Form.Group as={Row} className="mb-3">
            <Form.Label
              as={Col}
              htmlFor="wd-points"
              className="pt-2 fs-6 text-center text-sm-end"
            >
              Points
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                id="wd-points"
                value={assignment.points}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: Number(e.target.value),
                  })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label
              as={Col}
              className="pt-2 fs-6 text-center text-sm-end"
              htmlFor="wd-group"
            >
              Assignment Group
            </Form.Label>
            <Col sm={8}>
              <Form.Select defaultValue="ASSIGNMENTS" id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label
              as={Col}
              className="pt-2 fs-6 text-sm-end text-center"
              htmlFor="wd-display-grade-as"
            >
              Display Grade as
            </Form.Label>
            <Col sm="8">
              <Form.Select id="wd-display-grade-as">
                <option>Percentage</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Row className="mb-3">
            <Col className="text-center text-sm-end">
              <span>Submission Type</span>
            </Col>
            <Col sm={8}>
              <div className="d-flex flex-column border p-3">
                <Form.Group className="mb-4">
                  <Form.Select defaultValue="Online" id="wd-submission-type">
                    <option value="Online">Online</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="text-sm-start text-center">
                  <div className="text-start d-inline-block text-sm-start">
                    <Form.Label className="fw-bold">
                      Online Entry Options
                    </Form.Label>
                    <Form.Check
                      type="checkbox"
                      label="Text Entry"
                      className="mb-2"
                      id="wd-text-entry"
                    />
                    <Form.Check
                      type="checkbox"
                      label="Website URL"
                      className="mb-2"
                      id="wd-website-url"
                    />
                    <Form.Check
                      type="checkbox"
                      label="Media Recordings"
                      className="mb-2"
                      id="wd-media-recordings"
                    />
                    <Form.Check
                      type="checkbox"
                      label="Student Annotation"
                      className="mb-2"
                      id="wd-student-annotation"
                    />
                    <Form.Check
                      type="checkbox"
                      label="File Uploads"
                      className="mb-2"
                      id="wd-file-upload"
                    />
                  </div>
                </Form.Group>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="text-center text-sm-end">
              <span>Assign</span>
            </Col>
            <Col sm={8}>
              <div className="d-flex flex-column border p-3">
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold" htmlFor="wd-assign-to">
                    Assign to
                  </Form.Label>
                  <Form.Control defaultValue="Everyone" id="wd-assign-to" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold" htmlFor="wd-due-date">
                    Due
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-due-date"
                    value={formatDateForInput(assignment.dueDate)}
                    onChange={(e) =>
                      setAssignment({ ...assignment, dueDate: e.target.value })
                    }
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Form.Group>
                    <Form.Label className="fw-bold" htmlFor="wd-available-from">
                      Available from
                    </Form.Label>
                    <Form.Control
                      type="date"
                      id="wd-available-from"
                      value={formatDateForInput(assignment?.availableFrom)}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          availableFrom: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label
                      className="fw-bold"
                      htmlFor="wd-available-until"
                    >
                      Until
                    </Form.Label>
                    <Form.Control
                      type="date"
                      id="wd-available-until"
                      value={formatDateForInput(assignment?.availableTill)}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          availableTill: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <br />
      <hr />
      <Button
        as="a"
        variant="danger"
        className="float-end p-2 fs-5"
        onClick={saveButtonClick}
      >
        Save
      </Button>
      <Button
        as="a"
        variant="secondary"
        className="float-end p-2 fs-5 me-2"
        onClick={() => router.push(`/Courses/${courseId}/Assignments`)}
      >
        Cancel
      </Button>
    </div>
  );
}
