import { Box,Divider } from "@chakra-ui/react"
import QuoteCard from "./QuoteCard"

const SearchBody = () => {
    return(
        <Box paddingY={2}>
          <Divider/>  
          <QuoteCard type="book" isLiked={false} text="High Tier Yap"/>
        </Box>
    )
}
export default SearchBody