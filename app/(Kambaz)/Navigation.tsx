"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { ListGroup } from "react-bootstrap";

import Link from "next/link";
export default function KambazNavigation() {
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
    >
      <ListGroup.Item
        as="a"
        className="bg-black border-0 text-center"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img
          src="/images/NEU-logo.jpg"
          width="75px"
          alt="Northeastern University"
        />
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          className="text-white text-decoration-none"
          href="/Account"
          id="wd-account-link"
        >
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          className="text-white text-decoration-none"
          href="/Dashboard"
          id="wd-dashboard-link"
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          className="text-white text-decoration-none"
          href="/Dashboard"
          id="wd-course-link"
        >
          <LiaBookSolid className="fs-1 text-danger" />
          <br />
          Courses
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          className="text-white text-decoration-none"
          href="/Calendar"
          id="wd-calendar-link"
        >
          <IoCalendarOutline className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          className="text-white text-decoration-none"
          href="/Inbox"
          id="wd-inbox-link"
        >
          <FaInbox className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroup.Item>
      <ListGroup.Item className="border-0 bg-black text-center">
        <Link
          className="text-white text-decoration-none"
          href="/Labs"
          id="wd-labs-link"
        >
          <ImLab className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
}
