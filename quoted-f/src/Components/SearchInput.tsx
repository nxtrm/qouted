import { Box, HStack, IconButton, Input, Kbd, Modal, ModalBody, ModalContent, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaBookOpen, FaQuoteLeft, FaSearch } from "react-icons/fa";
import { Quote } from "../hooks/quoteProvider";
import APIClient from "../services/api-client";
import QuoteCard from "./QuoteCard";

const SearchInput = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searching, setSearching] = useState(false); //default false
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState<Quote[]>([]);
    const [type, setType] = useState("quote");

    const apiClient = new APIClient("/search");


    const handleSearch = () => {
        if (query.trim() !== "") {
            setSearching(true);
            apiClient.search(type, query)
                .then((response: any) => {
                    setSearchResults(response);
                })
                .catch((error) => {
                    console.error("Error fetching search results:", error);
                });
        }
    };
    
    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
    };
    

    useEffect(() => {
        if (query === "") {
            setSearching(false)

        }
    }, [query]);

    useEffect(() => {
        setSearchResults([]) //wiping and refetching data for a different category
        handleSearch()
    }, [type]);

    return (
        <HStack >
            <IconButton width={10} onClick={onOpen} aria-label="Search" variant="solid" icon={<FaSearch />}/>
           
            <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalBody padding={2}>
                        <HStack spacing={5}>
                        <Select height={9} value={type} onChange={(e) => setType(e.target.value)} padding={0} variant='filled' width={150} >
                            <option value='quote'>Quote</option>
                            <option value='book'>Book</option>
                            <option value='author'>Author</option>
                        </Select>
                            <Input onKeyDown={handleInputKeyPress} onChange={(e) => setQuery(e.target.value)} value={query} variant="unstyled" placeholder="Search Quotes"/>
                 
                            <Kbd >ENTER</Kbd>
                        </HStack>
                    </ModalBody>
                    
                    
                     {searching && ( //map different components for different
                        <>
                            {searchResults.map((result, index) => (
                                <Box paddingY={1} paddingX={2} key={index}>
                                    {type === "quote" && 
                                    <QuoteCard
                                        key={index}
                                        icon={<FaQuoteLeft size={"1.25rem"}/>}
                                        type="quote"
                                        id={result?.id}
                                        text={result?.Quote} 
                                        alttext={result?.BookName}
                                    />
                                    
                                    }
                                    {type === "book" && 
                                    <QuoteCard
                                        key={index}
                                        type="book"
                                        icon={<FaBookOpen size={"1.25rem"} />}
                                        id={result?.id}
                                        alttext={result?.AuthorName}
                                        text={result?.BookName} 
                                    />
                                    }
                                    
                                    {/* {type === "author" && <AuthorResult author={result} />} */}
                                </Box>
                            ))}
                        </>
                    )}
                    

                </ModalContent>
            </Modal>
        </HStack>
    );
};

export default SearchInput;
