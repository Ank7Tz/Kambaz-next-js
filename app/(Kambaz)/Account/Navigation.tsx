"use client";
import { usePathname } from "next/navigation";
import { AppRootState } from "../store";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import Link from "next/link";
export default function AccountNavigation() {
  const currentPath = usePathname();
  const isActive = (path: string) => currentPath.endsWith(path);
  const { currentUser } = useSelector(
    (state: AppRootState) => state.accountReducer
  );
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-0">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link}
            className={`list-group-item ${
              isActive(link) ? "active" : "text-danger"
            } border-0`}
          >
            {link}
          </Link>
        );
      })}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          href={`/Account/Users`}
          className={`list-group-item ${
            isActive("Users") ? "active" : "text-danger"
          } border-0`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
