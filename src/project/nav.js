import { Link, useLocation } from "react-router-dom";
function NavProject() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/project/signin"
        className={`nav-link ${pathname.includes("signin") ? "active" : ""}`}>Signin</Link>

      <Link to="/project/signup"
        className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}>Signup</Link>

      <Link to="/project/account"
        className={`nav-link ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
      <Link to="/project/admin/users"
        className={`nav-link ${pathname.includes("users") ? "active" : ""}`}>Users</Link>
    </nav>
  );
}
export default NavProject;