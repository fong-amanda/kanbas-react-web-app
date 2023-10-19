import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import blue from "./blueRect.png"

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h3 className="publish-course">Published Courses(24)
        <hr />
      </h3>
      <div className="list-group" style={{ width: 300 }}>
        {db.courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">

              <div class="card ">
                <img src={blue} alt="blue" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title"><a href="../Courses/AssignmentEditor/index.html">{course.name}</a></h5>
                  <h6 class="card-sub-title"><a href="../Courses/AssignmentEditor/index.html">{course._id}</a></h6>
                  <p class="card-text">
                    <a href="../Courses/AssignmentEditor/index.html">{course.number}</a></p>
                  <a href="#" class="btn btn-light"><i class="fa-regular fa-note-sticky"></i></a>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;