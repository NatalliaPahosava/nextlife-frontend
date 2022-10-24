import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const token = localStorage.getItem('userToken')
    console.log(token)
    const auth = { token: token }
  
    return auth.token ? <Outlet /> : <Navigate to='/' />
  }

 export default PrivateRoutes