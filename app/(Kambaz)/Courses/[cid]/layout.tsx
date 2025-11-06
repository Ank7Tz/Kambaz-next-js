"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "next/navigation";
import { AppRootState } from "../../store";
import { useSelector } from "react-redux";
import { Course } from "../../Database";

export default function CoursesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { cid } = useParams() as { cid: string };
  const {courses} = useSelector((state: AppRootState) => state.coursesReducer);
  const course = courses.find((course : Course) => course._id === cid);
  const [showNav, setShowNav] = useState(true);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" onClick={() => setShowNav(!showNav)}/>
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block me-2">
          {showNav && <CourseNavigation cid={cid} />}
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
