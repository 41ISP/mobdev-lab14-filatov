import { createBrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"
import Board from "../pages/Board"
import Layout from "../components/Layout"
import MyMessages from "../pages/MyMessages"
import AuthGuard from "../components/AuthGuard"
import Logout from "../pages/Logout"
export const router = createBrowserRouter([
    {
    basename: "/mobdev-lab13-filatov/"
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/logout",
        element: <Logout />
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Board /> },
            {
                path: "my-messages",
                element: (
                    <AuthGuard>
                        <MyMessages />
                    </AuthGuard>
                ),
            },
        ],
    },
])
