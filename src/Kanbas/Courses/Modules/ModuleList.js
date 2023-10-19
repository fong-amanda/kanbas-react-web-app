import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter(
    (module) => module.course === courseId);
  return (
    <div>
      <div className="row">
        <div class="button-sizing">
          <button type="button" class="btn btn-light">Collapse All</button>
          <button type="button" class="btn btn-light">View Progress</button>
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Publish All
          </button>
          <button type="button" class="btn btn-danger" ><i
            class="fa-solid fa-plus"></i>Module</button>
        </div>
      </div>
      <hr/>
      <div>
        <ul className="list-modules ">
          {
            modules.map((module, index) => (
              <li key={index} className="list-group list-group-item-secondary">
                <li className="list-group-item"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <span className="px-3  module-group">
                    <h3>{module.name}</h3>
                    <p>{module.description}</p>

                  </span>
                </li>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
export default ModuleList;