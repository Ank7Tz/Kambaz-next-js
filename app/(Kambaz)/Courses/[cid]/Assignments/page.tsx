import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>{" "}
          <br />
          <span className="wd-assignment-list-item-modules">
            Multiple Modules
          </span>
          {" | "}
          <strong>Not Available Until</strong>{" "}
          <span className="wd-assignment-list-item-time-from">
            May 6 at 12:00am
          </span>
          {" | "}
          <strong>Due</strong>{" "}
          <span className="wd-assignment-list-item-time-due">
            May 13 at 11:59pm
          </span>
          {" | "}
          <span className="wd-assignment-list-item-points">100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>{" "}
          <br />
          <span className="wd-assignment-list-item-modules">
            Multiple Modules
          </span>
          {" | "}
          <strong>Not Available Until</strong>{" "}
          <span className="wd-assignment-list-item-time-from">
            May 13 at 12:00am
          </span>
          {" | "}
          <strong>Due</strong>{" "}
          <span className="wd-assignment-list-item-time-due">
            May 20 at 11:59pm
          </span>
          {" | "}
          <span className="wd-assignment-list-item-points">100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - JAVASCRIPT + REACT
          </Link>{" "}
          <br />
          <span className="wd-assignment-list-item-modules">
            Multiple Modules
          </span>
          {" | "}
          <strong>Not Available Until</strong>{" "}
          <span className="wd-assignment-list-item-time-from">
            May 20 at 12:00am
          </span>
          {" | "}
          <strong>Due</strong>{" "}
          <span className="wd-assignment-list-item-time-due">
            May 27 at 11:59pm
          </span>
          {" | "}
          <span className="wd-assignment-list-item-points">100 pts</span>
        </li>
      </ul>
    </div>
  );
}
