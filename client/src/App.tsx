import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ScrollTop } from "./components/ScrollTop";
import { lazy, useContext } from "react";
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
import { Course } from "./pages/course/Course";
import { UserContext } from "./context/user";

const Home = lazy(() => import("./pages/home/Home"));
const Courses = lazy(() => import("./pages/courses/Courses"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Reset = lazy(() => import("./pages/reset/Reset"));
const NotFound = lazy(() => import("./pages/404/NotFound"));

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
      uri: "http://localhost:3001/graphql",
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
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<Course />} />
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

function Auth({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse: boolean;
}) {
  const { user } = useContext(UserContext);

  return user && !reverse ? <>{children}</> : <Navigate to="/404" />;
}

export default App;
