import Modules from "../Modules/page";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home" className="d-flex">
      <div className="w-100 me-2">
        <Modules />
      </div>
      <div className="flex-shrink-1">
        <CourseStatus />
      </div>
    </div>
  );
}
