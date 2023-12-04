import React, { useState } from "react";
import * as client from "./client";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function Account() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setUser(user);
  };

  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await client.account();
      setUser(user);
    }
    catch (error) {
      navigate("/project/signin")
    }
  };
  const signOut = async () => {
    await client.signOut();
    navigate("/project/signin")
  };
  const updateUser = async () => {
    await client.updateUser(user._id, user);
  };
  useState(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchUser();
    }
  }, []);

  /*
  const save = async () => {
    await client.updateUser(account);
  };
  */

  return (
    <div className="container">
      <h1>Account</h1>
      <input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        value={user?.password}
        className="form-control"
      />
      <input
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        type="text"
        value={user?.firstName}
        className="form-control"
      />
      <input
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        type="text"
        value={user?.lastName}
        className="form-control"
      />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={signOut} className="btn btn-danger">Sign Out</button>
      <button onClick={updateUser} className="btn btn-success">Save</button>
      <Link to="/project/admin/users" className="btn btn-warning w-100">
        Users
      </Link>
    </div>
  );
}
export default Account;