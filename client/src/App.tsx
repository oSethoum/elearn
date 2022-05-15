import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollTop } from "./ui/components/ScrollTop";
import { lazy } from "react";
import { Loader } from "./ui/components";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  from,
  DefaultOptions,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Suspense } from "react";

const DashboardCourses = lazy(() => import("./ui/pages/dashboard/Courses"));
const NewMeeting = lazy(() => import("./ui/forms/NewMeeting"));
const EditMeeting = lazy(() => import("./ui/forms/EditMeeting"));
const CourseContent = lazy(() => import("./ui/pages/courses/CourseContent"));
const Course = lazy(() => import("./ui/pages/courses/Course"));
const Lesson = lazy(() => import("./ui/pages/lesson/Lesson"));
const Assignment = lazy(() => import("./ui/pages/assignment/Assignment"));
const CourseList = lazy(() => import("./ui/pages/courses/CourseList"));
const Home = lazy(() => import("./ui/pages/home/Home"));
const Courses = lazy(() => import("./ui/pages/courses/Courses"));
const Dashboard = lazy(() => import("./ui/pages/dashboard/Dashboard"));
const Login = lazy(() => import("./ui/pages/login/Login"));
const Register = lazy(() => import("./ui/pages/register/Register"));
const Reset = lazy(() => import("./ui/pages/reset/Reset"));
const NotFound = lazy(() => import("./ui/pages/404/NotFound"));
const NewAssignment = lazy(() => import("./ui/forms/NewAssignment"));
const EditAssignment = lazy(() => import("./ui/forms/EditAssignment"));
const NewLesson = lazy(() => import("./ui/forms/NewLesson"));
const EditLesson = lazy(() => import("./ui/forms/EditLesson"));
const Users = lazy(() => import("./ui/pages/dashboard/Users"));
const Departments = lazy(() => import("./ui/pages/dashboard/Departments"));
const AboutUs = lazy(() => import("./ui/pages/about-us/AboutUs"));

const Stats = lazy(() => import("./ui/pages/dashboard/Stats"));

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Suspense fallback={<Loader height="100vh" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/" element={<Stats />} />
              <Route path="/dashboard/users" element={<Users />} />
              <Route path="/dashboard/departments" element={<Departments />} />
              <Route path="/dashboard/courses" element={<DashboardCourses />} />
            </Route>
            <Route path="/courses" element={<Courses />}>
              <Route path="/courses" element={<CourseList />} />
              <Route path="/courses/:courseId" element={<Course />}>
                <Route path="/courses/:courseId" element={<CourseContent />} />
                <Route
                  path="/courses/:courseId/lessons/:lessonId"
                  element={<Lesson />}
                />
                <Route
                  path="/courses/:courseId/lessons/new"
                  element={<NewLesson />}
                />
                <Route
                  path="/courses/:courseId/lessons/:lessonId/edit"
                  element={<EditLesson />}
                />
                <Route
                  path="/courses/:courseId/assignments/new"
                  element={<NewAssignment />}
                />
                <Route
                  path="/courses/:courseId/assignments/:assignmentId"
                  element={<Assignment />}
                />
                <Route
                  path="/courses/:courseId/assignments/:assignmentId/edit"
                  element={<EditAssignment />}
                />
                <Route
                  path="/courses/:courseId/meetings/new"
                  element={<NewMeeting />}
                />
                <Route
                  path="/courses/:courseId/meetings/:meetingId/edit"
                  element={<EditMeeting />}
                />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
