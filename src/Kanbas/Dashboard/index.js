import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="list-group">
        {db.courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;