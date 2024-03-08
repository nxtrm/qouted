import { SimpleGrid, Text } from "@chakra-ui/react";
import "./styles.css";

const LibraryPage = () => {
  //for testing purposes
  let quoteList: string[] = [
    "64d1e49a7e5e8e0f32664651",
    "64d1e49a7e5e8e0f32664652",
    "64d1e49a7e5e8e0f32664653",
    "64d1e49a7e5e8e0f3266464f",
  ];

  return (
    <SimpleGrid py={5} columns={3}>
      {quoteList.map((quoteId) => (
        <Text>

          quoteIdP
        </Text>
      ))}
    </SimpleGrid>
  );
};

export default LibraryPage;
