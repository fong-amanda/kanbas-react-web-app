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
            <div className="p-2 ">
              <button onClick={addNewCourse} class="btn btn-success">
                Add
              </button>
              &nbsp;&nbsp;

              <button onClick={updateCourse} class="btn btn-primary">
                Update
              </button>
            </div>
          </div>
          <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        </div>
      </h3>
      <div className="list-group" style={{ width: 800 }}>
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item">


            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><a href="../Courses/AssignmentEditor/index.html">{course.name}</a>
                  <buttons class="float-end">
                    <button class="btn btn-warning"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    &nbsp;&nbsp;
                    <button class="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                  </buttons>

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