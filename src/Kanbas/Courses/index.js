import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <h1>Course {course.name}</h1>
            <div className="row">
                <div className="col">
                    <CourseNavigation />
                </div>
                <div className="col">
                    <Routes>
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />

                    </Routes>
                    </div>
                </div>
            </div>
            );
}
            export default Courses;