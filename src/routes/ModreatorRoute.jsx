
import { Navigate, } from 'react-router'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import useRole from '../hooks/useRole'
const ModreatorRoute = ({ children }) => {
  const[role,isRoleLoading]=useRole()

  if (isRoleLoading) return <LoadingSpinner />
  if (role==='modreator') return children
  return <Navigate to='/' state={location.pathname} replace='true' />
}

export default ModreatorRoute
