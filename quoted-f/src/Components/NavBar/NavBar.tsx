import {
  AbsoluteCenter,
  Flex,
  HStack,
  Heading,
  Spacer
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../Providers/UserProvider";
import LoginButton from "./LoginButton";
import ProfileButton from "./ProfileButton";
import SearchInput from "./SearchInput";
import ThemeButton from "./ThemeButton";

function NavBar() {
  const { isLoggedIn } = useUserContext();

  return (
    <Flex paddingBottom={10}>

        <SearchInput />

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
