import { Box, Divider, HStack, IconButton, Input, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import QuoteCard from "./QuoteCard";
import APIClient from "../services/api-client";


const SearchInput = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searching, setSearching] = useState(false);
    const [quote, setQuote] = useState("");
    const bookName = ""
    const [searchResults, setSearchResults] = useState([]);

    const apiClient = new APIClient("/search");

    const searchQuery = {
        quote,
        bookName,
    };

    const handleSearch = () => (
        apiClient.find(searchQuery)
        .then((response:any) => {
            setSearchResults(response); // Assuming response is an array of quotes
        })
        .catch((error) => {
            console.error("Error fetching search results:", error);
        })
    )

    useEffect(() => {
        if (quote !== "") {
            setSearching(true)
            handleSearch()
        } else {
            setSearching(false);
        }
    }, [quote]);

    return (
        <HStack >
            <IconButton width={10} onClick={onOpen} aria-label="Search" variant="solid" icon={<FaSearch />}/>
           
            <Modal  size={"lg"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent padding={3}>
                    <ModalBody >
                        <Input  onChange={(e) => setQuote(e.target.value)} value={quote} variant="unstyled" placeholder="Search Quotes"/>
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
