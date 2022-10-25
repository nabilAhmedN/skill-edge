import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home"
import Courses from "../components/Courses/Courses"
import FAQ from "../components/FAQ/FAQ"
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "/courses",
                element: <Courses/>
            },
            {
                path: "/faq",
                element: <FAQ/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    }
])