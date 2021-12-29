import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleCoursePage from "./pages/SingleCoursePage";
import Trainers from "./pages/Trainers";
import SingleTrainerPage from "./pages/SingleTrainerPage";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/trainers/:id" element={<SingleTrainerPage />} />
          <Route path="/courses/:id" element={<SingleCoursePage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
