import EncodingParametersInURLs from "../a5/EncodingParametersInURLs"
import SimpleAPIExamples from "./SimpleAPIExamples";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./workingWithObjects";
function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="http://localhost:4000/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
        </div>
        <SimpleAPIExamples/>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;