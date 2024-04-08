// useSearchInputLogic.ts
import { useState, useEffect } from 'react';
import useSearch from "./useSearchInput";
import { useDisclosure } from "@chakra-ui/react";

const useSearchInputLogic = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [query, setQuery] = useState("");
    const [type, setType] = useState("quote");
    const [searching, setSearching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(5);
    const { searchResults, setSearchResults, handleSearch } = useSearch();

    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSearching(true);
            setCurrentPage(1)
            handleSearch(type, query);
        }
    };

    useEffect(() => {
        if (query === "") {
            setSearching(false);
            setSearchResults([]);
        }
    }, [query]);

    useEffect(() => {
        setSearching(false);
        setSearchResults([]);
    }, []);

    return { isOpen, onOpen, onClose, query, type, searching, currentPage, resultsPerPage, searchResults, setQuery, setType, setSearching, setCurrentPage, setResultsPerPage, setSearchResults, handleSearch, handleInputKeyPress };
};

export default useSearchInputLogic;