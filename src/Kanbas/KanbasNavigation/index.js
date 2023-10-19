import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaUser, FaBars, FaBook, FaCalendar, FaInbox, FaClock, FaTv, FaArrowRight, FaQuestion } from 'react-icons/fa';
import { FaGaugeHigh, FaN } from "react-icons/fa6";
import neu from "./neuLogo.png"

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const { pathname } = useLocation();
  const symbolIndex = [<FaUser />, <FaGaugeHigh />, <FaBook />,
  <FaCalendar />, <FaInbox />, <FaClock />, <FaTv />, <FaArrowRight />, <FaQuestion />]

  return (
    <div className="list-group navigation-bar" style={{ width: 120 }}>
      <div className="n-symbol">
        <img src={neu} alt="neu" />
      </div>
      {links.map((link, index) => (
        <Link

          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          <div className="symbol">
            {symbolIndex[index]}
          </div>
          <div>
            {link}
          </div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;