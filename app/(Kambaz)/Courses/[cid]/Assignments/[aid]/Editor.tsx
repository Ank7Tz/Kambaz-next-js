"use client";

import { assignments } from "@/app/(Kambaz)/Database";
import { useParams } from "next/navigation";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find((a) => a._id === aid);
  const formatDateForInput = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // YYYY-MM-DD
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
                defaultValue={assignment?.title || "assignment title"}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Control
                as="textarea"
                className="w-100"
                style={{ height: "400px" }}
                defaultValue={assignment?.description || "The assignment is available online Submit a link to the landing page of your website"}
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
                defaultValue={assignment?.points || 100}
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
                    defaultValue={formatDateForInput(assignment?.dueDate)}
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
                      defaultValue={formatDateForInput(assignment?.availableFrom)}
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
                      defaultValue={formatDateForInput(assignment?.availableTill)}
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
        href={`/Courses/${cid}/Assignments`}
      >
        Save
      </Button>
      <Button
        as="a"
        variant="secondary"
        className="float-end p-2 fs-5 me-2"
        href={`/Courses/${cid}/Assignments`}
      >
        Cancel
      </Button>
    </div>
  );
}
