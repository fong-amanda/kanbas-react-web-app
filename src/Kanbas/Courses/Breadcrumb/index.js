import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { FaBars } from 'react-icons/fa';
import db from "../../Database";



function BreadCrumb() {

  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  if (pathname.includes("Home")) {
    return(
      <div class="header-breadcrump">
        <div>
          <nav
            aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><FaBars /> &nbsp; &nbsp; {course.number}</li>
              <li class="breadcrumb-item list-group-item-secondary" aria-current="page"
              >Home</li>
            </ol>
          </nav>
        </div>
      </div>
    )
  }
  else if (pathname.includes("Modules")) {
    return(
      <div class="header-breadcrump">
        <div>
          <nav
            aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><FaBars /> &nbsp; &nbsp; {course.number}</li>
              <li class=" breadcrumb-item list-group-item-secondary" aria-current="page"
              >Modules</li>
            </ol>
          </nav>
        </div>
      </div>
    )
  }

  else if (pathname.includes("Assignments")) {
    return(
      <div class="header-breadcrump">
        <div>
          <nav
            aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><FaBars /> &nbsp; &nbsp; {course.number}</li>
              <li class=" breadcrumb-item list-group-item-secondary" aria-current="page"
              >Assignments</li>
            </ol>
          </nav>
        </div>
      </div>
    )
  }

  else if (pathname.includes("Grades")) {
    return(
      <div class="header-breadcrump">
        <div>
          <nav
            aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><FaBars /> &nbsp; &nbsp; {course.number}</li>
              <li class=" breadcrumb-item list-group-item-secondary" aria-current="page"
              >Grades</li>
            </ol>
          </nav>
        </div>
      </div>
    )
  }

  else {
    return(
      <div class="header-breadcrump">

        <div>
          <nav
            aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><FaBars /> &nbsp; &nbsp; {course.number}</li>
            </ol>
          </nav>
        </div>
      </div>
    )
  }

}


export default BreadCrumb;