import { HStack, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {

    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(prevState => !prevState);
    }
    return (
        <HStack>

            <IconButton width={10} onClick={handleClick} aria-label="Search" variant="solid" icon={<FaSearch />}/>
           
            {isOpen === true ? <Input variant="filled" placeholder="Search Quotes"/>:null }

    </HStack>
)
}
export default SearchInput