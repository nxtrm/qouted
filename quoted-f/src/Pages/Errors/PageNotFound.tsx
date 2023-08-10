import { Heading } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <>
      <Heading py={50} fontSize={"80px"}>
        404 Page Not Found
      </Heading>
      <Heading fontSize={"20px"}>
        The page you are trying to access doesn't exist! 😜
      </Heading>
    </>
  );
};

export default ErrorPage;
