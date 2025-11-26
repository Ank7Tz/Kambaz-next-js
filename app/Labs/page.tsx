import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab4" id="wd-lab4-link">
            Lab 4: State Management
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab5" id="wd-lab4-link">
            Lab 5: Server-Side - Express
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            kambaz{" "}
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Ank7Tz/Kambaz-next-js/tree/a5" id="wd-kambaz-link">
            My Github repo for Frontend
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Ank7Tz/kambaz-node-server-app/tree/a5" id="wd-kambaz-link">
            My Github repo for Backend
          </Link>
        </li>
        <li>
            Render.com Deployment - https://kambaz-node-server-app-qezh.onrender.com
        </li>
      </ul>
      <footer>
        <strong>Ankit Bando</strong>
      </footer>
    </div>
  );
}
