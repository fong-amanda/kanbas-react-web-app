import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const [assignments, setAssignments] = useState(db.assignments);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState({
    title: "New Assignment",
    description: "New Description",
    course: courseId,
  });

  const addAssignment = (assignment) => {
    setAssignment([
      { ...assignment, _id: new Date().getTime().toString() },
        ...assignments,
    ]);
  };

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div style={{ width: 800 }}>
      <h6>Assignment Name</h6>
      <input value={assignment.title}
        className="form-control mb-2" />
      <hr />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-warning">
        Cancel
      </Link>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger">
        Delete
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>


      <li className="list-group-item">
        <button onClick={() => { addAssignment(assignment) }}>Save</button>
        <input value={assignment.name}
          onChange={(e) => setAssignment({
            ...assignment, name: e.target.value
          })}
        />
        <textarea value={assignment.description}
          onChange={(e) => setAssignment({
            ...assignment, description: e.target.value
          })}
        />
      </li>

    </div>

  );
}


export default AssignmentEditor;