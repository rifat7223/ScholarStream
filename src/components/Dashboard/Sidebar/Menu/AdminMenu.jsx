import { FaUserCog, FaUserTag } from 'react-icons/fa'
import MenuItem from './MenuItem'


const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={FaUserTag} label='Modreator Request' address='modreator-request' />
      <MenuItem icon={FaUserTag} label='Add Scholar' address='modreator' />
      
    </>
  )
}

export default AdminMenu
