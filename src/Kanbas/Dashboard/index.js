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
      <h5>Course</h5>
      <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>

      <hr />
      <h3 className="publish-course">Published Courses(24)
        <hr />
      </h3>
      <div className="list-group" style={{ width: 300 }}>
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item">
            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>


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