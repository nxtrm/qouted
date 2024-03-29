import { Heading } from "@chakra-ui/react";
import NavBar from "../../Components/NavBar/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />

      <Heading py={50} fontSize={"80px"}>
        Oops...
      </Heading>
      <Heading fontSize={"20px"}>An unexpected error has ocurred!</Heading>
    </>
  );
};

export default ErrorPage;
