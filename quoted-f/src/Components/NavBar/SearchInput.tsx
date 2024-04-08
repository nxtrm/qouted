import { Badge, Box, HStack, IconButton, Input, Kbd, Modal, ModalBody, ModalContent, ModalOverlay, Select } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaBookOpen, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaSearch } from "react-icons/fa";
import useSearchInputLogic from "../../hooks/useSearchInputLogic";
import QuoteCard from "../Quote/QuoteCard";
import { Link } from "react-router-dom";

const SearchInput = () => {
    const { isOpen, onOpen, onClose, query, type, searching, currentPage, resultsPerPage, searchResults, setQuery, setType, setSearching, setCurrentPage, setResultsPerPage, setSearchResults, handleSearch, handleInputKeyPress } = useSearchInputLogic();
    
    useEffect(() => {
        if (query === "") {
            setSearching(false);
            setSearchResults([]);
        }
    }, [query]);

    useEffect(() => {
        setSearching(false);
        setSearchResults([]);

    }, [type]);    
    
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);
    
    const disableLeftButton = currentPage === 1;
    const disableRightButton = indexOfLastResult >= searchResults.length || currentResults.length < resultsPerPage;

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <HStack>
            <IconButton width={10} onClick={onOpen} aria-label="Search" variant="solid" icon={<FaSearch />} />

            <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody padding={2}>
                        <HStack spacing={5}>
                            <Select height={9} value={type} onChange={(e) => setType(e.target.value)} padding={0} variant='filled' width={150}>
                                <option value='quote'>Quote</option>
                                <option value='book'>Book</option>
                                <option value='author'>Author</option>
                            </Select>
                            <Input onKeyDown={handleInputKeyPress} onChange={(e) => setQuery(e.target.value)} value={query} variant="unstyled" placeholder="Search Quotes" />
                            <Kbd >ENTER</Kbd>
                        </HStack>
                    </ModalBody>

                    {searching && (
                        <>
                            {currentResults.map((result, index) => (
                                <Box paddingY={1} paddingX={2} key={index}>
                                    {type === "quote" &&
                                        <Link to={`/quote/${result?.id}`}>
                                            <QuoteCard
                                                key={index}
                                                icon={<FaQuoteLeft size={"1.25rem"} />}
                                                type="quote"
                                                id={result?.id}
                                                text={result?.Quote}
                                                alttext={result?.BookName}
                                            />
                                        </Link>
                                    }
                                    {type === "book" &&
                                        <Link to={`/book/${result?.id}`}>
                                            <QuoteCard
                                                key={index}
                                                type="book"
                                                icon={<FaBookOpen size={"1.25rem"} />}
                                                id={result?.id}
                                                alttext={result?.AuthorName}
                                                text={result?.BookName}
                                            />
                                        </Link> 
                                    }
                                </Box>
                            ))}

                            {/* Pagination Controls */}
                            <HStack padding={1}>
                                <IconButton paddingLeft={2}
                                    isDisabled={disableLeftButton}
                                    variant = {"invisible"}
                                    aria-label="Previous Page"
                                    icon={<FaChevronLeft />}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                />
                                <Badge width={4} variant='subtle'>{currentPage}</Badge>
                                <IconButton
                                    isDisabled={disableRightButton}
                                    variant = {"invisible"}
                                    aria-label="Next Page"
                                    icon={<FaChevronRight />}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={indexOfLastResult >= searchResults.length}
                                />
                            </HStack>
                        </>
                    )}

                </ModalContent>
            </Modal>
        </HStack>
    );
};

export default SearchInput;
