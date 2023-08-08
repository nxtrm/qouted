import {
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiLibrary, BiHome } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu>
      <HStack>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<RxHamburgerMenu />}
          variant="outline"
        />
        <Link to={"/"}>
          <Heading>Quoted.</Heading>
        </Link>
      </HStack>

      <MenuList>
        <Link to={"/"}>
          <MenuItem icon={<BiHome />} command="⌘H">
            Home
          </MenuItem>
        </Link>
        <Link to={"/library"}>
          <MenuItem icon={<BiLibrary />} command="⌘L">
            My Library
          </MenuItem>
        </Link>
        <MenuItem icon={<VscAccount />} command="⌘A">
          My Account
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavBar;
