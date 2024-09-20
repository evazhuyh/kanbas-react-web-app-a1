import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <h1>Yihua Zhu 20593</h1>
      <h3>GitHub: https://a1--1-kanbas-react-web-app-a1.netlify.app/#/Kanbas/Account/Signin</h3>
      <h1>Kanbas</h1>
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
          <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}
