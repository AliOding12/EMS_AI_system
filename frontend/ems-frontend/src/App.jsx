



import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsPage from "./students/sutdents_page";
import StudentList from "./students/StudentsList";
import InstructorsPage from "./instructors/instructorspage";
import InstructorList from "./instructors/InstructorsList";
import SettingsPage from "./settings/SettingsPage";
import AdminSettings from "./settings/Admin_Info/AdminInfo";
import Logs from "./settings/Logs/logs";
import SecuritySettings from "./settings/Security/securitysettings";
import AboutSettings from "./settings/Security/AboutSettings";
import AccountsSettings from "./settings/Security/AccountSettings";
import NotificationsSettings from "./settings/Security/NotificationSettings";
import ThemeSettings from "./settings/Theme/ThemeSettings";
import Layout from "./layout/layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />

        <Route path="/students" element={<StudentsPage />} />
        <Route path="/department/:deptSlug" element={<StudentList />} />

        <Route path="/instructors" element={<InstructorsPage />} />
        <Route
          path="/department/:deptSlug/instructors"
          element={<InstructorList />}
        />

        <Route path="/settings" element={<SettingsPage />}>
          <Route path="admin" element={<AdminSettings />} />
          <Route path="logs" element={<Logs />} />
          <Route path="security" element={<SecuritySettings />} />
          <Route path="about" element={<AboutSettings />} />
          <Route path="account" element={<AccountsSettings />} />
          <Route path="notification" element={<NotificationsSettings />} />
          <Route path="theme" element={<ThemeSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
