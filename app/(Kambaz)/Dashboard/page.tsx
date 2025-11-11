"use client";
import Link from "next/link";
import { Card, Col, Row, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "../store";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Course, Enrollment } from "../Database";
import { v4 as uuidv4 } from "uuid";
import { AddEnrollment, RemoveEnrollment } from "../enrollmentsReducer";

export default function Dashboard() {
  // const router = useRouter();
  const { currentUser } = useSelector(
    (state: AppRootState) => state.accountReducer
  );
  // useEffect(() => {
  //   if (!currentUser) {
  //     alert("Please signin to view dashboard");
  //     router.push("/Account/Signin");
  //   }
  // }, [currentUser]);

  if (!currentUser) {
    return null;
  }
  const isFaculty = currentUser.role === "FACULTY";

  const [course, setCourse] = useState<Course>({
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

  const [toggleEnrollment, setToggleEnrollment] = useState(false);
  const handleEnrollmentsClick = () => {
    setToggleEnrollment(!toggleEnrollment);
  };

  const { enrollments } = useSelector(
    (state: AppRootState) => state.enrollmentReducer
  );

  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

  useEffect(() => {
    const enrollC = courses.filter((course) =>
      enrollments.some(
        (enrollment) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
      )
    );
    setEnrolledCourses(enrollC);
  }, [enrollments]);

  const handleEnroll = (courseId: string) => {
    const newEnrollment = {
      _id: uuidv4(),
      user: currentUser._id,
      course: courseId,
    } as Enrollment;
    dispatch(AddEnrollment(newEnrollment));
  };

  const handleUnEnroll = (courseId: string) => {
    dispatch(RemoveEnrollment({ courseId: courseId, userId: currentUser._id }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {!isFaculty && (
        <>
          <Button className="float-end mb-3" onClick={handleEnrollmentsClick}>
            Enrollment
          </Button>
        </>
      )}
      {isFaculty && (
        <>
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
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      {!toggleEnrollment && (
        <h2 id="wd-dashboard-published">
          Published Courses ({enrolledCourses.length})
        </h2>
      )}
      {toggleEnrollment && (
        <h2 id="wd-dashboard-all-courses">All Courses ({courses.length})</h2>
      )}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(toggleEnrollment ? courses : enrolledCourses).map(
            (course: Course) => (
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
                      {!toggleEnrollment && (
                        <Button variant="primary"> Go </Button>
                      )}
                      {toggleEnrollment && (
                        <>
                          {enrolledCourses.some(
                            (c: Course) => c._id === course._id
                          ) ? (
                            <Button
                              variant="danger"
                              className="me-2"
                              onClick={(e) => {
                                e.preventDefault();
                                handleUnEnroll(course._id);
                              }}
                            >
                              Unroll
                            </Button>
                          ) : (
                            <Button
                              variant="success"
                              className="me-2"
                              onClick={(e) => {
                                e.preventDefault();
                                handleEnroll(course._id);
                              }}
                            >
                              Enroll
                            </Button>
                          )}
                        </>
                      )}
                      {isFaculty && (
                        <>
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
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            )
          )}
        </Row>
      </div>
    </div>
  );
}
