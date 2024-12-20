import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../login/Login";
import Register from "../Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";
import LoginWithPhone from "../login/LoginWithPhone";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://raw.githubusercontent.com/protik0939/categories/main/news.json`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/loginwithphone',
                element: <LoginWithPhone></LoginWithPhone>
            }
        ]
    }
])

export default routes;