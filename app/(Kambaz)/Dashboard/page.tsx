import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt="react image"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image
              src="/images/golang.webp"
              width={200}
              height={150}
              alt="Go image"
            />
            <div>
              <h5> CS2345 Golang </h5>
              <p className="wd-dashboard-course-title">
                Backend development with go
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image
              src="/images/java.svg"
              width={200}
              height={150}
              alt="Java image"
            />
            <div>
              <h5> CS3456 Java </h5>
              <p className="wd-dashboard-course-title">
                Backend development with Java
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image
              src="/images/c.png"
              width={200}
              height={150}
              alt="C image"
            />
            <div>
              <h5> CS4567 C </h5>
              <p className="wd-dashboard-course-title">
                Software development with C
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image
              src="/images/C++.svg"
              width={200}
              height={150}
              alt="C++ image"
            />
            <div>
              <h5> CS5678 C++ </h5>
              <p className="wd-dashboard-course-title">
                Software development with C++
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image
              src="/images/Rust.png"
              width={200}
              height={150}
              alt="Rust image"
            />
            <div>
              <h5> CS6789 Rust </h5>
              <p className="wd-dashboard-course-title">
                Backend development with Rust
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1111" className="wd-dashboard-course-link">
            <Image
              src="/images/javascript.png"
              width={200}
              height={150}
              alt="react image"
            />
            <div>
              <h5> CS1111 JavaScript </h5>
              <p className="wd-dashboard-course-title">
                Mastering Javascript
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
