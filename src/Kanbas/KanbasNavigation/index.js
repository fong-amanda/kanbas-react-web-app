import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaAcquisitionsIncorporated} from 'react-icons/fa';

function KanbasNavigation() {
  const links = ["Account" , "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const { pathname } = useLocation();
  
  return (
    
    <div className="list-group navigation-bar" style={{ width: 120 }}>
      {links.map((link, index) => (
        <Link
        
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;