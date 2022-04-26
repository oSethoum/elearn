import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollTop } from "./components/ScrollTop";
import { lazy } from "react";
import { Loader } from "./components";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Suspense } from "react";

const Course = lazy(() => import("./pages/courses/Course"));
const Lesson = lazy(() => import("./pages/lesson/Lesson"));
const Assignment = lazy(() => import("./pages/assignment/Assignment"));
const CourseList = lazy(() => import("./pages/courses/CourseList"));
const Home = lazy(() => import("./pages/home/Home"));
const Courses = lazy(() => import("./pages/courses/Courses"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Reset = lazy(() => import("./pages/reset/Reset"));
const NotFound = lazy(() => import("./pages/404/NotFound"));
const NewAssignment = lazy(() => import("./forms/NewAssignment"));
const EditAssignment = lazy(() => import("./forms/EditAssignment"));
const NewLesson = lazy(() => import("./forms/NewLesson"));
const EditLesson = lazy(() => import("./forms/EditLesson"));
const NewTeacher = lazy(() => import("./forms/NewTeacher"));
const EditTeacher = lazy(() => import("./forms/EditTeacher"));
const NewAdmin = lazy(() => import("./forms/NewTeacher"));
const EditAdmin = lazy(() => import("./forms/EditTeacher"));

function App() {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const link = from([
    errorLink,
    new HttpLink({
      uri: "/graphql",
    }),
  ]);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <ScrollTop />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />}>
                <Route path="/courses" element={<CourseList />} />
                <Route path="/courses/:courseId" element={<Course />}>
                  <Route
                    path="courses/:courseId/assignments/new"
                    element={<NewAssignment />}
                  />
                  <Route
                    path="courses/:courseId/assignments/:assignmentId"
                    element={<Assignment />}
                  />
                  <Route path="courses/:courseId/assignments/new" />
                  <Route
                    path="courses/:courseId/lessons/:lessonId"
                    element={<Lesson />}
                  />
                  <Route
                    path="courses/:courseId/lessons/new"
                    element={<NewLesson />}
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
      </ApolloProvider>
    </>
  );
}

export default App;
