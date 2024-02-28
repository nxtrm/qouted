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
import ThemeButton from "./ThemeButton";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<RxHamburgerMenu />} />

        <MenuList padding={0}>
          <Link to={"/"}>
            <MenuItem icon={<BiHome />}>Home</MenuItem>
          </Link>
          <Link to={"/library"}>
            <MenuItem icon={<BiLibrary />}>Library</MenuItem>
          </Link>
          <Link to={"/account"}>
            <MenuItem icon={<VscAccount />}>Account</MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <ThemeButton />
      <SearchInput />
      <Link to={"/"}>
        <Heading padding={2}>Quoted.</Heading>
      </Link>
    </HStack>
  );
};

export default NavBar;
