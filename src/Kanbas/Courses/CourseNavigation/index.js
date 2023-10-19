import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { FaBars } from 'react-icons/fa';
import db from "../../Database";



function CourseNavigation() {

  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="wd-course-navigation list-group">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          <div className="list-style">
            {link}</div>
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;