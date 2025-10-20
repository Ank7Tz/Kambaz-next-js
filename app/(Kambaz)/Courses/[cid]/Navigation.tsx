"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const currentPath = usePathname();
  const isActive = (path: string) => {
    return currentPath.includes(path);
  };
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 d-md-block d-none"
    >
      {links.map((link) => (
        <Link
          key={link}
          href={
            link === "People"
              ? `/Courses/${cid}/${link}/Table`
              : `/Courses/${cid}/${link}`
          }
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item ${
            isActive(link) ? "active" : "text-danger"
          } border-0`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
