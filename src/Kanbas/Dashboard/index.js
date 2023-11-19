import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import blue from "./blueRect.png"
import { React, useState } from "react";


function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
  return (
    <div>
      <h1>Dashboard</h1>


      <hr />
      <h3 className="publish-course">Published Courses(24)
        <hr />
        <div className="list-group">

          <div className="new-course list-group-item d-flex" >
            <div className="p-2">
              <input style={{ width: 300 }} value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            </div>
            <div className="p-2 " style={{ marginLeft: 280 }}>
              <button onClick={addNewCourse} className="btn btn-success">
                Add
              </button>
              &nbsp;&nbsp;

              <button onClick={updateCourse} className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
          <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        </div>
      </h3>
      <div className="list-group" style={{ width: 800 }}>
        {courses.map((course, index) => (
          <Link key={index} to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                 {course.name}
                  <div className="float-end">
                    <button className="btn btn-warning"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                  </div>

                </h5>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;