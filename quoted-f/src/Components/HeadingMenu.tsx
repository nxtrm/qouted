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
import { BiLibrary } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const HeadingMenu = () => {
  return (
    <Menu>
      <HStack>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<RxHamburgerMenu />}
          variant="outline"
        />
        <Heading>Quoted.</Heading>
      </HStack>

      <MenuList>
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

export default HeadingMenu;
