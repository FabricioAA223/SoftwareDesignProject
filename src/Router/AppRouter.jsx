import { Route, Routes} from "react-router-dom";

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
import Manuals from "../pages/manuals/Manuals"
import { useUser } from "../context/UserContext";

export function AppRouter() {
    const { user } = useUser(); // Obtén el usuario del contexto
  
    return (
        <Routes>
          <Route path="/" element={<NavigationBar/>} >
            <Route index element={<Landing />} />
  
            <Route path="login" element={<Login/>} />
            <Route path="forgot_password" element={<ForgotPassword/>} />
  
            {user ? (
                <>
                <Route path="manuals" element={<Manuals />} />
                <Route path="new_gender" element={<NewGender />} />
                <Route path="new_count" element={<NewCount />} />
                </>
            ): (
                <>
                <Route path="manuals" element={<Login />} />
                <Route path="new_gender" element={<Login />} />
                <Route path="new_count" element={<Login />} />
                </>
            )}

  
            {user && user.rol === 'Administrador' ? (
                <>
                <Route path="registered_microorganisms" element={<RegisteredMicroorganisms />} />
                <Route path="registered_users" element={<RegisteredUsers />} />
                <Route path="stats" element={<Stats />} />
                </>
            ) : (
                <>
                <Route path="registered_microorganisms" element={<NotFoundPage />} />
                <Route path="registered_users" element={<NotFoundPage />} />
                <Route path="stats" element={<NotFoundPage />} />
                </>
            )}

            
  
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    );
  }
export default AppRouter;