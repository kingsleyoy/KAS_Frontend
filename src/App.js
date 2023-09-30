import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Home from "./pages/Home";

import Sidebar from "./component/Sidebar";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Nopage from "./pages/Nopage";
import NotAuth from "./pages/NotAuth";
import { useSelector } from "react-redux";
import Form from "./pages/Form";
import LogIn from "./component/LogIn";
import VerifyEmail from "./pages/VerifyEmail";
import LogInTwo from "./component/LogInTwo";

import OfficialDoc from "./pages/OfficialDoc";
import KasMember from "./pages/KasMember";
import OpenToAll from "./pages/OpenToAll";
import OpenToAllForm from "./pages/OpenToAllForm";
import CreateAttendance from "./pages/CreateAttendance";

import RedirectOpenToAll from "./component/RedirectOpenToAll";

function App() {
  const isAuthenticated = useSelector((state) => state.user.auth);
  console.log(isAuthenticated);
  return (
    <Router>
      {isAuthenticated ? (
        <AuthenticatedLayout isAuthenticated />
      ) : (
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/:id" element={<LogIn />} />
          <Route path="/verifyemail/:id" element={<VerifyEmail />} />
          <Route path="/login" element={<LogInTwo />} />
          <Route path="/opentoallform/:id" element={<OpenToAllForm />} />
          <Route path="*" element={<NotAuth />} />
        </Routes>
      )}
    </Router>
  );
}

function AuthenticatedLayout({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/">
            {/* <Route index element={<Home />} /> */}
            <Route index element={<CreateAttendance />} />
            <Route path="officialdoc" element={<OfficialDoc />} />
            <Route path="profile" element={<Profile />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="kasmember/:id" element={<KasMember />} />
            <Route path="opentoall/:id" element={<OpenToAll />} />
            <Route path="/opentoallform/:id" element={<RedirectOpenToAll />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;
