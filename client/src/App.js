import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleCoursePage from "./pages/SingleCoursePage";
import Trainers from "./pages/Trainers";
import SingleTrainerPage from "./pages/SingleTrainerPage";
import AllCoursesPage from "./pages/AllCoursesPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import StudentProfilePage from "./pages/StudentProfilePage";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/trainers/:id" element={<SingleTrainerPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/courses/:id" element={<SingleCoursePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/update/:id" element={<StudentProfilePage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
