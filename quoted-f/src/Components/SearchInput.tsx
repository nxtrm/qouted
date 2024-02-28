import { Kbd,HStack,IconButton, Input, InputGroup, InputLeftElement, InputRightElement, InputRightAddon } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
const SearchInput = () => (
    <InputGroup width={300}>
        <InputLeftElement>
            <IconButton width={40} aria-label="Search" variant="transparent" icon={<FaSearch />}/>
        </InputLeftElement>
        <Input variant="filled" placeholder="Search Quotes">
        </Input>
        {/* <InputRightElement width={50}>
            <HStack>
                <div>
                <Kbd paddingX={1}>Shift</Kbd> <Kbd>F</Kbd>
                </div>
            </HStack>
        </InputRightElement> */}

    </InputGroup>
)
export default SearchInput