import { Box, Button, Divider, HStack, IconButton, Input, Modal, ModalBody, ModalContent, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import APIClient from "../services/api-client";
import QuoteCard from "./QuoteCard";
import { Quote } from "../hooks/quoteProvider";


const SearchInput = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searching, setSearching] = useState(false); //default false
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState<Quote[]>([]);
    const [type, setType] = useState("quote");

    const apiClient = new APIClient("/search");


    const handleSearch = () => {
            setSearching(true)
            apiClient.search(type, query)
            .then((response:any) => {
                setSearchResults(response); 
            })
            .catch((error) => {
                console.error("Error fetching search results:", error);
            })
        }
    
    // useEffect(() => {
    //     if (query !== "") {
    //         setSearching(true)
    //         handleSearch()
    //     } else {
    //         setSearching(false);
    //     }
    // }, [query]);

    useEffect(() => {
        if (query === "") {
            setSearching(false)
        }
    }, [query]);

    return (
        <HStack >
            <IconButton width={10} onClick={onOpen} aria-label="Search" variant="solid" icon={<FaSearch />}/>
           
            <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalBody padding={2}>
                        <HStack spacing={5}>
                        <Select value={type} onChange={(e) => setType(e.target.value)} padding={0} variant='filled' width={150} >
                            <option value='quote'>Quote</option>
                            <option value='book'>Book</option>
                            <option value='author'>Author</option>
                        </Select>
                            <Input onChange={(e) => setQuery(e.target.value)} value={query} variant="unstyled" placeholder="Search Quotes"/>
                 
                            <Button onClick={handleSearch}>E</Button> //replace later
                        </HStack>
                    </ModalBody>
                    
                    {searching && (

                        <Box paddingX={2}>
                            
                            {searchResults.map((quote, index) => (
                                <Box paddingY={1}>
                                    <QuoteCard
                                        key={index}
                                        type="quote"
                                        isLiked={false}
                                        id={quote?.id}
                                        text={quote?.Quote} // Assuming "Quote" is the field containing the quote text
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}
                </ModalContent>
            </Modal>
        </HStack>
    );
};

export default SearchInput;
