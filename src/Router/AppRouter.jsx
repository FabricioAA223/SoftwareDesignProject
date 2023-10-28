import { Route, Routes} from "react-router-dom";

import NewGender from '../pages/newGender/NewGender'
import NewCount from '../pages/newCount/NewCount'
import NewGroupCount from '../pages/newCount/NewGroupCount'
import RegisteredMicroorganisms from '../pages/registeredMicroorganisms/RegisteredMicroorganisms'
import RegisteredUsers from '../pages/registeredUsers/RegisteredUsers'
import Stats from '../pages/stats/Stats'
import Login from '../pages/loginUsers/Login'
import ChangeCredencials from "../pages/changeCredentials/ChangeCredentials"
import NavigationBar from "../pages/navBar/NavigationBar";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import NotFoundPage from '../pages/notFoundPage/NotFoundPage'
import Manuals from "../pages/manuals/Manuals"
import NewUser from "../pages/newUser/NewUser"
import { useUser } from "../context/UserContext";
import TableWithResults from "../pages/newCount/components/TableWithResults";
import Landing from "../pages/landingPage/Landing";

export function AppRouter() {
    const { user } = useUser(); // Obtén el usuario del contexto
  
    return (
        <Routes>
          <Route path="/" element={<NavigationBar/>} >
            {/* <Route index element={<HomePage />} /> */}
            <Route index element={<Landing />} />
  
            <Route path="login" element={<Login/>} />
            <Route path="forgot_password" element={<ForgotPassword/>} />
  
            {user ? (
                <>
                <Route path="manuals" element={<Manuals />} />
                <Route path="individual_count" element={<NewCount />} />
                <Route path="group_count" element={<NewGroupCount />} />
                <Route path="data_report" element={<TableWithResults />} />
                <Route path="change_credentials" element={<ChangeCredencials />} />
                </>
            ): (
                <>
                <Route path="manuals" element={<Login />} />
                <Route path="individual_count" element={<Login />} />
                <Route path="group_count" element={<Login />} />
                <Route path="data_report" element={<Login />} />
                <Route path="change_credencials" element={<Login />} />
                </>
            )}
            {user && (user.rol === 'Encargado' || user.rol === 'Administrador')? (
                <>
                <Route path="new_gender" element={<NewGender />} />
                </>
            ): (
                <>
                <Route path="new_gender" element={<NotFoundPage />} />
                </>
            )}           
  
            {user && user.rol === 'Administrador' ? (
                <>
                <Route path="registered_microorganisms" element={<RegisteredMicroorganisms />} />
                <Route path="registered_users" element={<RegisteredUsers />} />
                <Route path="stats" element={<Stats />} />
                <Route path="registered_users/new_user" element={<NewUser />} />
                </>
            ) : (
                <>
                <Route path="registered_microorganisms" element={<NotFoundPage />} />
                <Route path="registered_users" element={<NotFoundPage />} />
                <Route path="stats" element={<NotFoundPage />} />
                <Route path="registered_users/new_user" element={<NotFoundPage />} />
                </>
            )}

            
  
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
    );
  }
export default AppRouter;