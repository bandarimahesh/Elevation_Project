import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SingleCoursePage from "./pages/SingleCoursePage";
import Trainers from "./pages/Trainers";
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
import Pay from "./pages/Pay";
import { useSelector } from "react-redux";
import Cart from "./pages/Cart";
import AddNewCoursePage from "./pages/TrainerPages/AddNewCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobSeekerHomePage from "./pages/JobSeekerHomePage";
import NotFound from "./pages/Not-found";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user?.type);
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/job-seeker" element={<JobSeekerHomePage />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/trainee/cart" element={<Cart />} />
          {/* all courses */}
          <Route path="/courses" element={<AllCoursesPage />} />
          {/* single course page */}
          <Route path="/courses/domain/:id" element={<SingleCoursePage />} />
          <Route path="/courses/it-skills/:id" element={<SingleCoursePage />} />
          <Route path="/courses/rpa/:id" element={<SingleCoursePage />} />
          {/* all trainers route*/}
          <Route path="/trainers" element={<Trainers />} />
          {/* sp single trainer page */}
          <Route path="/trainers/:id" element={<SingleTrainerPage />} />
          {/* trainee home page after login */}

          {user?.type === "trainee" ? (
            <Route path="/trainee" exact element={<TraineeHomePage />} />
          ) : (
            <Route path="/" exact element={<Home />} />
          )}
          <Route path="/pay" element={<Pay />} />
          {user?.type === "trainee" ? (
            <Route
              path="/trainee/profile/update/:id"
              element={<TraineeProfilePage />}
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
          {/* trainee home page after login */}
          {user?.type === "trainer" ? (
            <Route
              path="/trainer/profile/:id"
              element={<TrainerProfilePage />}
            />
          ) : (
            <Route path="/login" element={<Navigate to="/login" />} />
          )}
          {/* job seeker home page after login */}
          {user?.type === "job-seeker" ? (
            <Route path="/job-seeker" exact element={<JobSeekerHomePage />} />
          ) : (
            <Route path="/" exact element={<Home />} />
          )}
          <Route path="*" element={<Home />} />
          {/* Trainer section */}
          <Route path="/add-new-course" element={<AddNewCoursePage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
