import { Box, HStack, IconButton, Input, Kbd, Modal, ModalBody, ModalContent, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaBookOpen, FaQuoteLeft, FaSearch } from "react-icons/fa";
import QuoteCard from "../Quote/QuoteCard";
import useSearch from "../../hooks/useSearchInput";

const SearchInput = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [query, setQuery] = useState("");
    const [type, setType] = useState("quote");
    const [searching, setSearching] = useState(false);

    const { searchResults, setSearchResults, handleSearch } = useSearch();
    
    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                setSearching(true)
                handleSearch(type, query);
            }
    };

    useEffect(() => {
        if (query === "") {
            setSearching(false);
            setSearchResults([])
        }
    }, [query]);


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
                    
                    
                     {searching && ( //map different components for different types
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
