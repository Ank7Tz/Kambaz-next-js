"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();
  const lastPathCheck = pathname.includes("Assignments/");
  const part = lastPathCheck ? "Assignments" : pathname.split("/").pop();
  return (
    <span>
      Course {course?.name} {" "}
      <span className="text-black">{`> ${part}`}</span>
    </span>
  );
}
