import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home"
import Courses from "../components/Courses/Courses"
import FAQ from "../components/FAQ/FAQ"
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import CourseFeatures from "../components/CourseFeatures/CourseFeatures";
import Premium from "../components/Premium/Premium";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
        element: <CourseFeatures />,
      },
      {
        path: "/premium/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/premiumCourses/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Premium />
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);