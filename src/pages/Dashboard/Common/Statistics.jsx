import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
import useRole from '../../../hooks/useRole'
const Statistics = () => {
  const[role,isRoleLoading]=useRole()
  return (
    <div>
     {role==='admin'&& <AdminStatistics />}
    </div>
  )
}

export default Statistics
