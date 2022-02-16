import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SingleCoursePage from "./pages/SingleCoursePage";
import SingleTrainerPage from "./pages/SingleTrainerPage";
import AllCoursesPage from "./pages/AllCoursesPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TraineeProfilePage from "./pages/TraineeProfilePage";
import TrainerProfilePage from "./pages/TrainerPages/TrainerProfilePage";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import TraineeHomePage from "./pages/TraineeHomePage";
import TrainerHomePage from "./pages/TrainerHomePage";
import { useSelector } from "react-redux";
import AddNewCoursePage from "./pages/TrainerPages/AddNewCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobSeekerHomePage from "./pages/JobSeekerHomePage";
import NotFound from "./pages/Not-found";
import JoinNow from "./pages/TrainerPages/JoinNow";
import AllTrainerPage from "./pages/AllTrainersPage";
import Dashboard from "./pages/Dashboard";
import ScrollButton from "./components/ScrollToTop";
import RecruiterHomePage from "./pages/RecruiterHomePage";
import Terms from "./pages/T&C";
import PrivacyPage from "./pages/PrivacyPage";
import ForgotPwdPage from "./pages/ForgotPwdPage";
import ResetPwdPage from "./pages/ResetPwdPage";
import YourCoursePage from "./pages/TrainerPages/YourCoursePage";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/job-seeker" element={<JobSeekerHomePage />} />
          <Route path="/recruiter" element={<RecruiterHomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* current it is commented out <Route path="/trainee/cart" element={<Cart />} /> */}
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/forgot-password" element={<ForgotPwdPage />} />
          <Route
            path="/trainer/your-courses/:id"
            element={<YourCoursePage />}
          />

          <Route
            path={`/user/activate/reset-password/:id`}
            element={<ResetPwdPage />}
          />
          <Route path={`/user/activate/account/:id`} element={<Login />} />
          {/* all courses */}
          <Route path="/courses" element={<AllCoursesPage />} />
          {/* single course page */}
          <Route
            path="/courses/domain-skills/:id"
            element={<SingleCoursePage />}
          />
          <Route path="/courses/it-skills/:id" element={<SingleCoursePage />} />
          <Route
            path="/courses/software-development/:id"
            element={<SingleCoursePage />}
          />
          {/* all trainers route*/}
          <Route path="/trainers" element={<AllTrainerPage />} />
          {/* sp single trainer page */}
          <Route path="/trainers/details/:id" element={<SingleTrainerPage />} />
          {/* trainee home page after login */}
          {user?.type === "trainee" ? (
            <Route path="/trainee" exact element={<TraineeHomePage />} />
          ) : (
            <Route path="/" exact element={<Home />} />
          )}
          <Route path="/trainer/join-now" element={<JoinNow />} />
          {user?.type === "trainee" ? (
            <Route
              path="/trainee/profile/update/:id"
              element={<TraineeProfilePage />}
            />
          ) : (
            <Route path="*" element={<Navigate to="/Not-found" />} />
          )}
          {user?.type === "trainer" ? (
            <Route
              path="/trainer/profile/update/:id"
              element={<TrainerProfilePage />}
            />
          ) : (
            <Route path="*" element={<Navigate to="/Not-found" />} />
          )}
          {/* trainer home page after login */}
          {user?.type === "trainer" ? (
            <Route path="/trainer" exact element={<TrainerHomePage />} />
          ) : (
            <Route path="/" exact element={<Home />} />
          )}
          {/* trainer home page after login */}
          {user?.type === "trainer" ? (
            <Route path="/trainer" exact element={<TrainerHomePage />} />
          ) : (
            <Route path="/" exact element={<Home />} />
          )}
          {/* job seeker home page after login */}
          {user?.type === "job-seeker" ? (
            <Route path="/job-seeker" exact element={<JobSeekerHomePage />} />
          ) : (
            <Route path="/" exact element={<Home />} />
          )}
          <Route path="*" element={<Home />} />
          {/* Trainer section */}
          <Route
            path="/user/admin/dashboard/add-new-course"
            element={<AddNewCoursePage />}
          />
          {user?.role === 1 ? (
            <Route path="/user/admin/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/login" element={<Navigate to="/login" />} />
          )}
          {/* recruiter home page */}
          {user?.type === "recruiter" ? (
            <Route path="/recruiter" exact element={<RecruiterHomePage />} />
          ) : (
            <Route path="/" exact element={<Home />} />
          )}
        </Routes>
      </Router>
      <ScrollButton />
    </React.Fragment>
  );
};

export default App;
