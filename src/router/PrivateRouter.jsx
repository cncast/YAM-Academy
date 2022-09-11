import { Navigate } from 'react-router-dom'

export const PrivateRouter = ({ children, hasAccess = [], isLogged = false}) => {
    const hasPrivs = () => {
        const userType = 'admin';
        return  !hasAccess.length || hasAccess.includes(userType);
    }

    return (
        isLogged
        ?   (
                hasPrivs()
                ? children
                : <Navigate to='/campus'/>
            )
        : <Navigate to='/login'/>
    )
}
