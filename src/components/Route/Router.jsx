import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main.jsx";
import Home from "../Home/Home.jsx";
import AddUsers from "../AddUsers/AddUsers.jsx";
import User from "../Home/User.jsx";
import UserDetails from "../UserDetails/UserDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/add-user',
                element: <AddUsers />
            },
            {
                path: '/user-details/:id',
                element: <UserDetails />,
                // loader:()=>{fetch('https://test-ten-gray-39.vercel.app//')}
                loader: ({ params }) => fetch(`https://test-ten-gray-39.vercel.app/users/${params.id}`)
            },
            {
                path: '/user',
                element: <User />
            },

        ],
    },

]);

export default router;
