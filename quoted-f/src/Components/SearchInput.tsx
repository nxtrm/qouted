import { Kbd,HStack,InputLeftAddon,IconButton, Input, InputGroup, InputLeftElement, InputRightElement, InputRightAddon } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
import {useState} from "react";

const SearchInput = () => {

    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(prevState => !prevState);
    }
    return (
        <HStack>

            <IconButton width={10} onClick={handleClick} aria-label="Search" variant="solid" icon={<FaSearch />}/>
           
            {isOpen === true ? <Input variant="filled" placeholder="Search Quotes"/>:null }
            {/* <HStack>
            
                <Kbd paddingX={1}>Shift</Kbd> <Kbd>F</Kbd>
            
            </HStack> */}
        

    </HStack>
)
}
export default SearchInput