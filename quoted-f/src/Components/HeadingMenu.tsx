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
        <MenuItem icon={<BiLibrary />} command="⌘L">
          My Library
        </MenuItem>
        <MenuItem icon={<VscAccount />} command="⌘A">
          My Account
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeadingMenu;
