import { IconButton} from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const LoginButton = () => {
    return (
        <Link to={"/login"}>
            <IconButton aria-label="login" icon={<FiLogIn/>}/>
        </Link>
    )

}
export default LoginButton