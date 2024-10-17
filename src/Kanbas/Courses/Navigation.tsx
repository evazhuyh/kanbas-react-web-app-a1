import { Link , useLocation , useParams} from "react-router-dom";
import * as db from "../Database";
export default function CoursesNavigation() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? "active text-danger" : "text-danger"}` }>
        {link} </Link>
      ))}
    </div>
);}
