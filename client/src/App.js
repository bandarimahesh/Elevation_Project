import React, { useContext } from "react";
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
import TrainerProfilePage from "./pages/TrainerProfilePage";
import { Context } from "./context/Context";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import TraineeHomePage from "./pages/TraineeHomePage";
import TrainerHomePage from "./pages/TrainerHomePage";
const App = () => {
  const { user } = useContext(Context);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* all courses */}
          <Route path="/courses" element={<AllCoursesPage />} />
          {/* single course page */}
          <Route path="/courses/:id" element={<SingleCoursePage />} />
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

          <Route path="/trainer" exact element={<TrainerHomePage />} />

          {user?.type === "trainee" ? (
            <Route
              path="/trainee/profile/update/:id"
              element={<TraineeProfilePage />}
            />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
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
              path="/trainer/profile/update/:id"
              element={<TrainerProfilePage />}
            />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
