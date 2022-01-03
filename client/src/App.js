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
const App = () => {
  const { user } = useContext(Context);
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/trainers" element={<Trainers />} />
          <Route path="/trainers/:id" element={<SingleTrainerPage />} />

          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/courses/:id" element={<SingleCoursePage />} />

          {/* depend upon type profile */}
          {user ? (
            <Route
              path="/trainee/profile/:id"
              element={<TraineeProfilePage />}
            />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          {user ? (
            <Route
              path="/trainer/profile/:id"
              element={<TrainerProfilePage />}
            />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
