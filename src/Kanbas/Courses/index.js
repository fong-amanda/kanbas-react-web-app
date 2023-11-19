import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "./index.css";
import BreadCrumb from "./Breadcrumb";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses({ }) {
    const { courseId } = useParams();
    const URL = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    return (
        <div>
            <BreadCrumb />
            <div>
                <hr />

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <CourseNavigation />
                        </div>
                        <div className="col">
                            <Routes>
                                <Route path="Home" element={<Home />} />
                                <Route path="Modules" element={<Modules />} />
                                <Route path="Assignments" element={<Assignments />} />
                                <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                                <Route path="Grades" element={<h1>Grades</h1>} />
                            </Routes>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Courses;