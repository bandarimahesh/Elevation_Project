import React, { useState } from "react";
import "./Dashboard.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  NotificationsNone,
  Language,
  Settings,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import UsersTable from "./UsersTable";
import AllCourse from "./AllCourse";
const Dashboard = () => {
  const [showCourses, setShowCourse] = useState(false);
  const [showAllTrainers, setShowAllTrainers] = useState(true);
  const ShowCourseHandler = (event) => {
    setShowCourse(!showCourses);
    setShowAllTrainers(false);
  };
  const ShowTrainersHandler = (event) => {
    setShowAllTrainers(!showAllTrainers);
    setShowCourse(false);
  };
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Elevashun</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  className="link"
                >
                  <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />
                    Home
                  </li>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/user/admin/dashboard/add-new-course"
                  className="link"
                >
                  <li className="sidebarListItem">
                    <Timeline className="sidebarIcon" />
                    Add New Course
                  </li>
                </Link>
                <li className="sidebarListItem">
                  <TrendingUp className="sidebarIcon" />
                  Timeline
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem" onClick={ShowTrainersHandler}>
                  <PermIdentity className="sidebarIcon" />
                  All Trainers
                </li>
                <li className="sidebarListItem" onClick={ShowCourseHandler}>
                  <Storefront className="sidebarIcon" />
                  All Courses
                </li>

                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Transactions
                </li>
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Reports
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <MailOutline className="sidebarIcon" />
                  Mail
                </li>
                <li className="sidebarListItem">
                  <DynamicFeed className="sidebarIcon" />
                  Feedback
                </li>
                <li className="sidebarListItem">
                  <ChatBubbleOutline className="sidebarIcon" />
                  Messages
                </li>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  Manage
                </li>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <Report className="sidebarIcon" />
                  Reports
                </li>
              </ul>
            </div>
          </div>
        </div>

        {showCourses && <AllCourse />}
        {showAllTrainers && <UsersTable />}
      </div>
    </>
  );
};

export default Dashboard;
