import { HStack, IconButton, Input, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SearchBody from "./SearchBody";

const SearchInput = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [searching, setSearching] = useState(true)

    return (
        <HStack>
            
            <IconButton width={10} onClick={onOpen} aria-label="Search" variant="solid" icon={<FaSearch />}/>
           
            {/* {isOpen === true ? <Input variant="filled" placeholder="Search Quotes"/>:null } */}
            <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalBody >
                        <Input variant="unstyled" placeholder="Search Quotes"/>
                    
                    </ModalBody>
                    {searching && <SearchBody/>}
                </ModalContent>

                    
            </Modal>

        </HStack>

)
}
export default SearchInput