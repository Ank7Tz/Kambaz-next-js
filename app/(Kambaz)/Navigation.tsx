"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { ListGroup } from "react-bootstrap";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function KambazNavigation() {
  const currentPath = usePathname();
  const isActive = (path: string) => currentPath.startsWith(path);
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
    >
      <ListGroup.Item
        as={Link}
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
      <ListGroup.Item
        as={Link}
        className={`border-0 text-center ${
          isActive("/Account") ? "text-danger bg-white" : "text-white bg-black"
        } text-decoration-none`}
        href="/Account"
        id="wd-account-link"
      >
        <FaRegCircleUser
          className={`fs-1 ${
            isActive("/Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        className={`border-0 text-center ${
          isActive("/Dashboard")
            ? "text-danger bg-white"
            : "text-white bg-black"
        } text-decoration-none`}
        href="/Dashboard"
        id="wd-dashboard-link"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        className={`border-0 text-center ${
          isActive("/Courses") ? "text-danger bg-white" : "text-white bg-black"
        } text-decoration-none`}
        href="/Dashboard"
        id="wd-course-link"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        className={`border-0 text-center ${
          isActive("/Calendar") ? "text-danger bg-white" : "text-white bg-black"
        } text-decoration-none`}
        href="/Calendar"
        id="wd-calendar-link"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        className={`border-0 text-center ${
          isActive("/Inbox") ? "text-danger bg-white" : "text-white bg-black"
        } text-decoration-none`}
        href="/Inbox"
        id="wd-inbox-link"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </ListGroup.Item>
      <ListGroup.Item 
      as={Link}
      className={`border-0 text-center ${
          isActive("/Labs")
            ? "text-danger bg-white"
            : "text-white bg-black"
        } text-decoration-none`}
          href="/Labs"
          id="wd-labs-link"
        >
          <ImLab className="fs-1 text-danger" />
          <br />
          Labs
      </ListGroup.Item>
    </ListGroup>
  );
}
