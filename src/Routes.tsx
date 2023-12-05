import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const ReportingincidentOne = React.lazy(
  () => import("pages/ReportingincidentOne"),
);
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const LoginNine = React.lazy(() => import("pages/LoginNine"));
const FrameTwentyNine = React.lazy(() => import("pages/FrameTwentyNine"));
const LoginTen = React.lazy(() => import("pages/LoginTen"));
const LoginSix = React.lazy(() => import("pages/LoginSix"));
const LoginFive = React.lazy(() => import("pages/LoginFive"));
const LoginThree = React.lazy(() => import("pages/LoginThree"));
const LoginSeven = React.lazy(() => import("pages/LoginSeven"));
const Drafts = React.lazy(() => import("pages/Drafts"));
const LoginFour = React.lazy(() => import("pages/LoginFour"));
const LoginEleven = React.lazy(() => import("pages/LoginEleven"));
const LoginThirteen = React.lazy(() => import("pages/LoginThirteen"));
const Resetpasssword = React.lazy(() => import("pages/Resetpasssword"));
const Clickingonanimage = React.lazy(() => import("pages/Clickingonanimage"));
const Reportingincident = React.lazy(() => import("pages/Reportingincident"));
const Reportincident = React.lazy(() => import("pages/Reportincident"));
const Claims = React.lazy(() => import("pages/Claims"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const LoginTwo = React.lazy(() => import("pages/LoginTwo"));
const ForgotPasswordresettingpassword = React.lazy(
  () => import("pages/ForgotPasswordresettingpassword"),
);
const Agentprofile = React.lazy(() => import("pages/Agentprofile"));
const Agentsdashboard = React.lazy(() => import("pages/Agentsdashboard"));
const FAOne = React.lazy(() => import("pages/FAOne"));
const LoginTwelve = React.lazy(() => import("pages/LoginTwelve"));
const LoginEight = React.lazy(() => import("pages/LoginEight"));
const Agentaccountcreation = React.lazy(
  () => import("pages/Agentaccountcreation"),
);
const Cancelpolicy = React.lazy(() => import("pages/Cancelpolicy"));
const Viewingadditionalcardetails = React.lazy(
  () => import("pages/Viewingadditionalcardetails"),
);
const Editingpersonaldetails = React.lazy(
  () => import("pages/Editingpersonaldetails"),
);
const Chairman = React.lazy(() => import("pages/Chairman"));
const Reminderforupcomingpolicyrenewal = React.lazy(
  () => import("pages/Reminderforupcomingpolicyrenewal"),
);
const NotificationsOne = React.lazy(() => import("pages/NotificationsOne"));
const Receiptforapaidpolicy = React.lazy(
  () => import("pages/Receiptforapaidpolicy"),
);
const Notifications = React.lazy(() => import("pages/Notifications"));
const Multipolicyrenewal = React.lazy(() => import("pages/Multipolicyrenewal"));
const Singlevehiclepolicyrenewal = React.lazy(
  () => import("pages/Singlevehiclepolicyrenewal"),
);
const FA = React.lazy(() => import("pages/FA"));
const LoginFourteen = React.lazy(() => import("pages/LoginFourteen"));
const Login = React.lazy(() => import("pages/Login"));
const Chairmanaccountcreation = React.lazy(
  () => import("pages/Chairmanaccountcreation"),
);
const Chairmansdashboard = React.lazy(() => import("pages/Chairmansdashboard"));
const WireframeOne = React.lazy(() => import("pages/WireframeOne"));
const WireframeTwo = React.lazy(() => import("pages/WireframeTwo"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/wireframetwo" element={<WireframeTwo />} />
          <Route path="/wireframeone" element={<WireframeOne />} />
          <Route path="/chairmansdashboard" element={<Chairmansdashboard />} />
          <Route
            path="/chairmanaccountcreation"
            element={<Chairmanaccountcreation />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/loginfourteen" element={<LoginFourteen />} />
          <Route path="/fa" element={<FA />} />
          <Route
            path="/singlevehiclepolicyrenewal"
            element={<Singlevehiclepolicyrenewal />}
          />
          <Route path="/multipolicyrenewal" element={<Multipolicyrenewal />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route
            path="/receiptforapaidpolicy"
            element={<Receiptforapaidpolicy />}
          />
          <Route path="/notificationsone" element={<NotificationsOne />} />
          <Route
            path="/reminderforupcomingpolicyrenewal"
            element={<Reminderforupcomingpolicyrenewal />}
          />
          <Route path="/chairman" element={<Chairman />} />
          <Route
            path="/editingpersonaldetails"
            element={<Editingpersonaldetails />}
          />
          <Route
            path="/viewingadditionalcardetails"
            element={<Viewingadditionalcardetails />}
          />
          <Route path="/cancelpolicy" element={<Cancelpolicy />} />
          <Route
            path="/agentaccountcreation"
            element={<Agentaccountcreation />}
          />
          <Route path="/logineight" element={<LoginEight />} />
          <Route path="/logintwelve" element={<LoginTwelve />} />
          <Route path="/faone" element={<FAOne />} />
          <Route path="/agentsdashboard" element={<Agentsdashboard />} />
          <Route path="/agentprofile" element={<Agentprofile />} />
          <Route
            path="/forgotpasswordresettingpassword"
            element={<ForgotPasswordresettingpassword />}
          />
          <Route path="/logintwo" element={<LoginTwo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/reportincident" element={<Reportincident />} />
          <Route path="/reportingincident" element={<Reportingincident />} />
          <Route path="/clickingonanimage" element={<Clickingonanimage />} />
          <Route path="/resetpasssword" element={<Resetpasssword />} />
          <Route path="/loginthirteen" element={<LoginThirteen />} />
          <Route path="/logineleven" element={<LoginEleven />} />
          <Route path="/loginfour" element={<LoginFour />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/loginseven" element={<LoginSeven />} />
          <Route path="/loginthree" element={<LoginThree />} />
          <Route path="/loginfive" element={<LoginFive />} />
          <Route path="/loginsix" element={<LoginSix />} />
          <Route path="/loginten" element={<LoginTen />} />
          <Route path="/frametwentynine" element={<FrameTwentyNine />} />
          <Route path="/loginnine" element={<LoginNine />} />
          <Route path="/loginone" element={<LoginOne />} />
          <Route
            path="/reportingincidentone"
            element={<ReportingincidentOne />}
          />
          <Route path="/dashboardone" element={<DashboardOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
