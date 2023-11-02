import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import db from "../../Database";
import "./index.css";


function ModuleList() {
  const { courseId } = useParams();

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group" style={{ width: 800}}>
      <li className="list-group-item">
        <div className="d-flex">
          <div className="p-2">
            <input className="list-group-item" value={module.name}
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
              } /> <br />
            <textarea className="list-group-item" value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
              } />
          </div>
          <div className="buttons p-2" style={{ marginLeft: 350}}>
            <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>

              Update
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>

              Add</button>
          </div>
        </div>
      </li>


      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item d-flex" >
            <div className="p-2" style={{ width: 400}}>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <p>{module._id}</p>
            </div>
            <div className="buttons p-2" style={{ marginLeft: 190, float: "right" }}>
              <button className="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-success"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
            </div>
          </li>))}
    </ul>

  );
}

export default ModuleList;