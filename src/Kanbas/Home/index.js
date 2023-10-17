import ModuleList from "../Courses/Modules/ModuleList";

function Home() {
    return(
        <div className="row">
            <div className="col-10">
                <h1>Home</h1>
                <ModuleList/>
            </div>
            <div className="col-10">Status</div>

    
        </div>
    )
}
export default Home;