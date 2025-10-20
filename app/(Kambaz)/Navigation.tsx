"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard, id: "wd-dashboard-link" },
    { label: "Courses", path: "/Dashboard", icon: LiaBookSolid, id: "wd-courses-link" },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline, id: "wd-calendar-link" },
    { label: "Inbox", path: "/Inbox", icon: FaInbox, id: "wd-inbox-link" },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid, id: "wd-labs-link" },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
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
        id="wd-account-link"
        as={Link}
        href="/Account"
        className={`text-center border-0 bg-black
            ${
              pathname.includes("Account")
                ? "bg-white text-danger"
                : "bg-black text-white"
            }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroup.Item>
      {links.map((link) => (
        <ListGroup.Item
          id={link.id}
          key={link.label + ":" + link.path}
          as={Link}
          href={link.path}
          className={`bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </ListGroup.Item>
      ))}
      {/* <ListGroup.Item
        as={Link}
        className={`border-0 text-center ${
          isActive("/Account") ? "text-white bg-black" : "text-white bg-black"
        } text-decoration-none`}
        href="/Account"
        id="wd-account-link"
      >
        <FaRegCircleUser className="fs-1 text-white" />
        <br />
        Account
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        className="border-0 text-center text-danger bg-white text-decoration-none"
        href="/Dashboard"
        id="wd-dashboard-link"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        className="border-0 text-center text-white bg-black text-decoration-none"
        href="/Dashboard"
        id="wd-course-link"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        className="border-0 text-center text-white bg-black text-decoration-none"
        href="/Calendar"
        id="wd-calendar-link"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        className="border-0 text-center text-white bg-black text-decoration-none"
        href="/Inbox"
        id="wd-inbox-link"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </ListGroup.Item>
      <ListGroup.Item
        as={Link}
        className="border-0 text-center text-white bg-black text-decoration-none"
        href="/Labs"
        id="wd-labs-link"
      >
        <ImLab className="fs-1 text-danger" />
        <br />
        Labs
      </ListGroup.Item> */}
    </ListGroup>
  );
}
