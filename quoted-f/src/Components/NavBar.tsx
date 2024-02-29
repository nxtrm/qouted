import {
  AbsoluteCenter,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiLibrary, BiHome } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import SearchInput from "./SearchInput";
import LoginButton from "./LoginButton";

function NavBar() {
  return (
    <Flex paddingBottom={10}>
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
          <SearchInput />
        </HStack>

        <Spacer/>

        <AbsoluteCenter axis="horizontal">
          <Link to={"/"}>
            <Heading>Quoted.</Heading>
          </Link>
        </AbsoluteCenter>

        <Spacer/>

      <HStack>
        <ThemeButton />

        <Link to={"/login"}>
          <LoginButton/>
        </Link>

      </HStack>    
    </Flex>
  );
};

export default NavBar;
