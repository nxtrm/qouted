import { IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useUserContext } from '../hooks/UserProvider';
import { MdOutlineSettings } from "react-icons/md";

const ProfileButton = () => {

  const { logout } = useUserContext();

  const handleLogOut  = () => {
    logout()
    
    toast({
        title: "Signed out",
        description: "Succesfully signed out",
        status: "info",
        duration: 5000,
        isClosable: true,
    });
  }

  return (

    <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<FaUser />}>
            Profile
        </MenuButton>
        <MenuList padding={0}>
        <MenuGroup title='Profile'>
        <MenuDivider />

            <Link to="/account">
                <MenuItem icon={<VscAccount />}>Account</MenuItem >
            </Link>

            <Link to="/settings">
                <MenuItem icon={<MdOutlineSettings />}>Settings</MenuItem>
            </Link>
            
            <Link to="/">
                <MenuItem icon={<FiLogOut />} onClick={handleLogOut}>Sign out</MenuItem>
            </Link>
            
        </MenuGroup>
        {/* <MenuGroup title='Help'>
        <MenuDivider />
            <MenuItem>FAQ</MenuItem>
        </MenuGroup> */}
        </MenuList>
    </Menu>

  )
}

export default ProfileButton

function toast(_arg0: { title: string; description: string; status: string; duration: number; isClosable: boolean; }) {
    throw new Error('Function not implemented.');
}
