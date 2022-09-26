import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { Navbar } from '../campus/components/Navbar'
import { CampusPage } from '../campus/pages/CampusPage'
import { HomePage } from '../campus/pages/HomePage'
import { AdminSectionsPage } from '../controlPanel/pages/AdminSectionsPage'
import { ControlPanelPage } from '../controlPanel/pages/ControlPanelPage'
import { useAuthStore } from '../hooks'
import { MatriculaPage } from '../matricula/pages/MatriculaPage'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
  const { loggedUser, checkAuthToken } = useAuthStore();
  const isLogged = !!loggedUser;
  useEffect(() => {
    checkAuthToken();
  }, [])
  
  return (
    <>
        {isLogged ? <Navbar/> : <></>}
        <Routes>

            {/* Static Routes */}
            <Route path="/*" element={<Navigate to='/'/>}/>

            {/* Public Routes */}
            <Route path="/" element={ !isLogged ? <HomePage/> : <Navigate to='/campus'/>}/>
            <Route path="login" element={ !isLogged ? <LoginPage/> : <Navigate to='/campus'/>}/>
            <Route path="register" element={ !isLogged ? <RegisterPage/> : <Navigate to='/campus'/>}/>

            {/* Private Routes */}
            <Route path="campus" element={<PrivateRouter isLogged={isLogged}><CampusPage/></PrivateRouter>}/>
            <Route path="matricula" element={<PrivateRouter isLogged={isLogged} hasAccess={['student', 'teacher', 'admin']}><MatriculaPage/></PrivateRouter>}/>
            <Route path="controlPanel" element={<PrivateRouter isLogged={isLogged} hasAccess={['admin']}><ControlPanelPage/></PrivateRouter>}/>
            <Route path="adminSections" element={<PrivateRouter isLogged={isLogged} hasAccess={['admin']}><AdminSectionsPage/></PrivateRouter>}/>
        </Routes>
    
    </>
  )
}
