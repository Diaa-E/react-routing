import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Popeye from './components/Popeye.jsx';
import Spinach from './components/Spinach.jsx';
import DefualtProfile from './components/DefaultProfile.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import App from "./App.jsx";
import Profile from "./components/Profile.jsx";

const Router = ({ }) => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage/>
          },
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "profile/:name",
            element: <Profile />,
          }
    ]);

    return (
        <RouterProvider router={router}/>
    )
}

export default Router