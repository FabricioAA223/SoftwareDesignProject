import { createBrowserRouter,
    createRoutesFromElements, Route } from "react-router-dom";

import NewGender from '../pages/newGender/NewGender'
import NewCount from '../pages/newCount/NewCount'
import RegisteredMicroorganisms from '../pages/registeredMicroorganisms/RegisteredMicroorganisms'
import RegisteredUsers from '../pages/registeredUsers/RegisteredUsers'
import Stats from '../pages/stats/Stats'
import Login from '../pages/loginUsers/Login'

import NavigationBar from "../pages/navBar/NavigationBar";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import NotFoundPage from '../pages/notFoundPage/NotFoundPage'
import Landing from "../pages/landingPage/Landing";

export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<NavigationBar/>}>
            <Route index element={<Landing />} />

            <Route path="login" element={<Login />}/>
            <Route path="forgot_password" element={<ForgotPassword />} />

            <Route path="new_gender" element={<NewGender />} />
            <Route path="new_count" element={<NewCount />} />

            <Route path="registered_microorganisms" element={<RegisteredMicroorganisms />} />
            <Route path="registered_users" element={<RegisteredUsers />} />

            <Route path="stats" element={<Stats />} />

            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
)