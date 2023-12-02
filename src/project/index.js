import Signin from "./users/signin";
import Signup from "./users/signup";
import UserTable from "./users/table";
import Account from "./users/account";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import NavProject from "./nav";
function Project() {
  return (
    <div className="row">
      <div>
        <Nav />
        <NavProject/>
        <br/>
      </div>
      <div>
        <Routes>
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/" element={<Navigate to="/project/signin" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;