"use client";
import Link from "next/link";
import * as db from "../Database";
import { Card, Col, Row, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../store";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
} from "../Courses/reducer";
import { useState } from "react";

export default function Dashboard() {
  const [course, setCourse] = useState<db.Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    department: "",
    credits: 4,
    description: "New description",
    image: "/images/Rocket Propulsion.jpg",
  });
  const { courses } = useSelector(
    (state: AppRootState) => state.coursesReducer
  );
  const dispatch = useDispatch();
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))}
        >
          Update
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: db.Course) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src={course.image}
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}{" "}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}{" "}
                    </Card.Text>
                    <Button variant="primary"> Go </Button>
                    <Button
                      variant="danger"
                      className="float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(course._id));
                      }}
                      id="wd-delete-course-click"
                    >
                      Delete
                    </Button>
                    <Button
                      variant="warning"
                      className="float-end me-2"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      id="wd-edit-course-click"
                    >
                      Edit
                    </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
