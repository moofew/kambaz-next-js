/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { enrollUser, unenrollUser } from "../Enrollments/reducer";
import { useState } from "react";
import Link from "next/link";
import * as client from "../Courses/client";

import {
  Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl,
} from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const [showAllCourses, setShowAllCourses] = useState(false);

  const isFaculty = currentUser?.role === "FACULTY";

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === courseId
    );
  };

  const handleEnroll = async (courseId: string) => {
    if (!currentUser?._id) return;
    await client.enrollUserInCourse(currentUser._id, courseId);
    dispatch(enrollUser({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = async (courseId: string) => {
    if (!currentUser?._id) return;
    await client.unenrollUserFromCourse(currentUser._id, courseId);
    dispatch(unenrollUser({ userId: currentUser._id, courseId }));
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    })));
  };

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course: any) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <Button
          variant="primary"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
        </Button>
      </div>
      <hr />
      {isFaculty && (
        <>
          <h5>New Course</h5>
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
          <br />
          <div className="d-flex gap-2 justify-content-end">
            <button
              onClick={onUpdateCourse}
              className="btn btn-secondary float-end"
              id="wd-update-course-click"
            >
              Update
            </button>
            <button
              onClick={onAddNewCourse}
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
            >
              Add
            </button>
          </div>
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((c: any) => (
            <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${c._id}/Home`} className="text-decoration-none">
                  <CardImg src={c.image} variant="top" width="100%" height={160} />
                </Link>
                <CardBody className="card-body">
                  <Link
                    href={`/Courses/${c._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                  </Link>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {c.description}
                  </CardText>

                  {isEnrolled(c._id) && (
                    <Link href={`/Courses/${c._id}/Home`}>
                      <Button variant="primary">Go</Button>
                    </Link>
                  )}

                  {isFaculty && (
                    <>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(c);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={(event) => {
                          event.preventDefault();
                          onDeleteCourse(c._id);
                        }}
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </>
                  )}

                  {!isFaculty && showAllCourses && (
                    <div className="float-end">
                      {isEnrolled(c._id) ? (
                        <Button
                          variant="danger"
                          onClick={(event) => {
                            event.preventDefault();
                            handleUnenroll(c._id);
                          }}
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnroll(c._id);
                          }}
                        >
                          Enroll
                        </Button>
                      )}
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
