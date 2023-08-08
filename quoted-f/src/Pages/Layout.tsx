import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Layout = () => {
  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
