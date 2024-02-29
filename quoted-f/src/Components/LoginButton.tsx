import { IconButton } from "@chakra-ui/react"
import { FiLogIn } from "react-icons/fi";

const LoginButton = () => {
    return (
        <IconButton aria-label="login" icon={<FiLogIn/>}/>
    )

}
export default LoginButton