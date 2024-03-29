import { Grid, GridItem, SimpleGrid, VStack, Text, Box } from '@chakra-ui/react'
import BookInfo from '../QuoteConfig/BookInfo'
import DeleteButton from '../QuoteConfig/DeleteButton'
import LikeComponent from '../Like/LikeComponent'
import NextButton from '../QuoteConfig/NextButton'

interface Props {
    quote : string,
    dateAdded : string,
    id : string,
    refetch: () => void;
}

const QuoteScreen = ({quote, dateAdded, id, refetch}:Props) => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={4}
    >
      <GridItem gridColumnEnd={6} className="centered-container" colSpan={4}>
        <VStack>
          <Text maxWidth={500} fontSize={20}>
            {quote}
          </Text>
          <Text marginY={4} textColor={"gray.600"} fontSize={"15px"}>
            Added on {dateAdded}
          </Text>
        </VStack>
      </GridItem>
      <GridItem gridColumnStart={6} className="centered-container" colSpan={2}>
        <SimpleGrid columns={1} spacing={"5px"}>
          <BookInfo />
          <Box marginY={4}>
            <DeleteButton slug={id} onDeletion={refetch}/>
            {/* <EditButton /> */}
            <LikeComponent />
            <NextButton onClick={refetch} />
          </Box>
        </SimpleGrid>
      </GridItem>
    </Grid>
  )
}

export default QuoteScreen