import * as client from "./client";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // [1]
  /*const [credentials, setCredentials] = useState({ username: "", password: "" });*/
  const navigate = useNavigate();
  const signin = async () => {
    try {
      const user = await client.signIn({ username, password });
      navigate("/project/account");
        console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="container">
      <h1>Sign in</h1>
      {error && <div className="alert alert-danger">{error}</div> }
      
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        value={username}
        className="form-control"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        value={password}
        className="form-control"
      />
      <button className="btn btn-success" onClick={signin}>
        Sign In
      </button >
      <button className="btn btn-warning"><Link to="/project/signup">Sign Up</Link></button>
    </div>
  );
}
export default Signin;