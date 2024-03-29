import { Alert, AlertDescription, AlertTitle } from "@chakra-ui/react";
import { GoAlert } from "react-icons/go";

const ErrorComponent = (error: any) => {
  return (
    <Alert status="error">
      <GoAlert />
      <AlertTitle>An error ocurred</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};

export default ErrorComponent;
