import ModuleList from "../Modules/ModuleList";
import "./index.css";


function Home() {
  return (
    <div className="home">
      <div className="col">
        <ModuleList />
      </div>
      <div className="float-end col">
        <button type="button" class="btn btn-light" style={{ width: 250, textAlign: "left", marginBottom: 10 }}>Import Existing Contact</button><br />
        <button type="button" class="btn btn-light" style={{ width: 250, textAlign: "left", marginBottom: 10 }}>Import from Commons</button><br />
        <button type="button" class="btn btn-light" style={{ width: 250, textAlign: "left", marginBottom: 10 }}>Choose Home Page</button><br />
        <button type="button" class="btn btn-light" style={{ width: 250, textAlign: "left", marginBottom: 10 }}>View Vourse Stream</button><br />
        <button type="button" class="btn btn-light" style={{ width: 250, textAlign: "left", marginBottom: 10 }}>New Announcement</button><br />
        <button type="button" class="btn btn-light" style={{ width: 250, textAlign: "left", marginBottom: 10 }}>New Analytics</button><br />
        <button type="button" class="btn btn-light" style={{ width: 250, textAlign: "left", marginBottom: 10 }}>View Course Notifcations</button><br />
        <h5>To Do</h5>
        <hr />
        <a href="#" style={{ color: "red", textDecoration: "none" }}>Grade A2 - CSS + BOOTSTRAP</a>
        <p> 100 points - Sep 18 at 11:59pm</p>
        <a href="#" style={{ color: "red", textDecoration: "none" }}>Grade A1 - ENV + HTML</a>
        <p> 100 points - Oct 2 at 11:59pm</p>
      </div>
    </div>
  );
}
export default Home;