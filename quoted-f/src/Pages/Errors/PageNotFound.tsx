import { Heading } from "@chakra-ui/react";
import NavBar from "../../Components/NavBar";

const ErrorPage = () => {
  return (
    <>
      <Heading py={50} fontSize={"80px"}>
        404 Page Not Found
      </Heading>
      <Heading fontSize={"20px"}>An unexpected error has ocurred!</Heading>
    </>
  );
};

export default ErrorPage;
