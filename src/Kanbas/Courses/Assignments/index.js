import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>


      <div style={{ marginBottom: 30 }}>
        <button type="button" class="btn btn-light float-end"><i
          class="fa-solid fa-plus"></i>Group</button>
        <button type="button" class="btn btn-danger float-end" ><i
          class="fa-solid fa-plus"></i>Assignment</button> <br /><br /><hr />

      </div>
      <div className="list-group">
        <ul class="list-group my-3">
          <li class="list-group-item list-group-item-secondary"><i class="fa fa-ellipsis-v"
            aria-hidden="true"></i><i class="fa-solid fa-caret-down"></i>
            Assignments<span class="float-end"><i class="fa-solid fa-plus"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span></li>
          {courseAssignments.map((assignment) => (

            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              <li class="list-group"><i class="fa fa-ellipsis-v" aria-hidden="true"></i><i
                class="fa-regular fa-pen-to-square"></i>
                {assignment.title}
                <i class="fa fa-ellipsis-v float-end" aria-hidden="true"></i><i class="fa-solid fa-check float-end text-success"></i></li>
            </Link>
          ))}

        </ul>
      </div>
    </div>
  );
}
export default Assignments;