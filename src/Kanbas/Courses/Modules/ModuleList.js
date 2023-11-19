import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {

  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import db from "../../Database";
import "./index.css";

import * as client from "./client";
function ModuleList() {
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  return (
    <ul className="list-group" style={{ width: 800 }}>
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
          <div className="buttons p-2" style={{ marginLeft: 350 }}>
            <button className="btn btn-primary"
              onClick={() => handleUpdateModule()}>

              Update
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-success"
              onClick={(handleAddModule)}>

              Add</button>
          </div>
        </div>
      </li>


      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item d-flex" >
            <div className="p-2" style={{ width: 400 }}>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <p>{module._id}</p>
            </div>
            <div className="buttons p-2" style={{ marginLeft: 190, float: "right" }}>
              <button className="btn btn-danger"
                onClick={() => handleDeleteModule(module._id)}>
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