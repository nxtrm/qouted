import { useState } from "react";
import APIClient from "../services/api-client";
import { Quote } from "../Providers/quoteProvider";

const useSearch = () => {
    const [searchResults, setSearchResults] = useState<Quote[]>([]);

    const apiClient = new APIClient("/search");

    const handleSearch = (type: string, query: string) => {
        if (query.trim() !== "") {
            apiClient.search(type, query)
                .then((response: any) => {
                    setSearchResults(response);
                })
                .catch((error) => {
                    console.error("Error fetching search results:", error);
                });
        }
    };

    return {
        searchResults,
        setSearchResults,
        handleSearch,
    };
};

export default useSearch;