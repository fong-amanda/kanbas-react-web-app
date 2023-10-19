import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route } from "react-router-dom";
import Nav from "../Nav";


function Kanbas() {
  return (
    <div>
      <div class="nav-bar">
        <Nav />
      </div>
      <div className="d-flex">

        <div class="row">
          <div class="col">
            <KanbasNavigation />
          </div>
          <div class="col">
            <Routes>
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:courseId/*" element={<Courses />} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div >

  );
}
export default Kanbas;