import {
  AbsoluteCenter,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer
} from "@chakra-ui/react";
import { BiHome, BiLibrary } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/UserProvider";
import LoginButton from "./LoginButton";
import ProfileButton from "./ProfileButton";
import SearchInput from "./SearchInput";
import ThemeButton from "./ThemeButton";

function NavBar() {
  const { isLoggedIn } = useUserContext();

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
        {isLoggedIn ? (<ProfileButton/>) : (<LoginButton/>)}
      </HStack>    
    </Flex>
  );
};

export default NavBar;
