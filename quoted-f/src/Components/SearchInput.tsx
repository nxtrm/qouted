import { Box, Button, Divider, HStack, IconButton, Input, Modal, ModalBody, ModalContent, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import APIClient from "../services/api-client";
import QuoteCard from "./QuoteCard";


const SearchInput = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searching, setSearching] = useState(true); //default false
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [type, setType] = useState("quote");

    const apiClient = new APIClient("/search");


    const handleSearch = () => (
        
        apiClient.search(type, query)
        .then((response:any) => {
            console.log(response)
            setSearchResults(response); 
        })
        .catch((error) => {
            console.error("Error fetching search results:", error);
        })
    )
    // 
    // useEffect(() => {
    //     if (quote !== "") {
    //         setSearching(true)
    //         handleSearch()
    //     } else {
    //         setSearching(false);
    //     }
    // }, [quote]);

    useEffect(() => {
        console.log(type)
    }, [type]);

    return (
        <HStack >
            <IconButton width={10} onClick={onOpen} aria-label="Search" variant="solid" icon={<FaSearch />}/>
           
            <Modal  size={"lg"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent paddingY={2}>
                    <ModalBody >
                        <HStack spacing={5}>
                        <Select value={type} onChange={(e) => setType(e.target.value)} padding={0} variant='filled' width={150} >
                            <option value='quote'>Quote</option>
                            <option value='book'>Book</option>
                            <option value='author'>Author</option>
                        </Select>
                            <Input onChange={(e) => setQuery(e.target.value)} value={query} variant="unstyled" placeholder="Search Quotes"/>
                            {/* replace later */}
                            <Button onClick={handleSearch}>E</Button> 
                        </HStack>
                    </ModalBody>
                    {searching && (
                        <Box paddingY={2}>
                            <Divider/>
                            {searchResults.map((quote, index) => (
                                <QuoteCard
                                    key={index}
                                    type="quote"
                                    isLiked={false}
                                    text={quote?.Quote} // Assuming "Quote" is the field containing the quote text
                                />
                            ))}
                        </Box>
                    )}
                </ModalContent>
            </Modal>
        </HStack>
    );
};

export default SearchInput;
