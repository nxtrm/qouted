import { Box,Text, HStack, IconButton, Input, InputGroup, InputLeftElement, VStack, useToast, Heading, SimpleGrid, Grid, GridItem } from '@chakra-ui/react';
import { useUserContext } from '../hooks/UserProvider';
import APIClient from '../services/api-client';
import { useState } from 'react';
import { FaRegUser, FaSave } from 'react-icons/fa';

function SettingsPage() {
    const { username, userId, update } = useUserContext();
    const apiClient = new APIClient('/update/user');
    const toast = useToast()
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [error, setError] = useState("");

    const handleUpdate = async () => {

        const userData = {
            "username": username,
            "newUsername": newUsername
          }

          if (newUsername.length < 4) {
            setError("Username must be at least 4 characters long");
            return;
          }
        
        apiClient.updateUser(userData)
        .then((response) => {
            if (response.message) {
                update(newUsername , null);
                toast({
                    title: "Updated username",
                    status: "success",
                    isClosable: true,
                })
            } 
        })
        .catch((error) => {
            console.error("User update error", error);
        });
    }

  return (
    <VStack>
    <Heading padding={5}>Account Settings</Heading>
    <Grid templateColumns='repeat(4, 1fr)'  templateRows='repeat(4, 1fr)' gap={6}>
        <GridItem rowSpan={1} colSpan={1}>
                <Heading paddingTop={2} fontSize={"xl"}>Username:</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
                <InputGroup maxWidth={400}>   
                        <InputLeftElement pointerEvents='none'>
                        <FaRegUser />
                        </InputLeftElement>
                        <Input type='newUsername' onChange={(e) => setNewUsername(e.target.value)} value={newUsername} placeholder={"Username"} />
                    <Box paddingX={2}>
                        <IconButton aria-label="save" icon={<FaSave />} onClick={handleUpdate}/>
                    </Box>
                </InputGroup>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
            <Heading paddingTop={2} fontSize={"xl"}>Email:</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
            <InputGroup maxWidth={400}>   
                    <InputLeftElement pointerEvents='none'>
                    <FaRegUser />
                    </InputLeftElement>
                    <Input type='newEmail' onChange={(e) => setNewEmail(e.target.value)} value={newEmail} placeholder={"Email"} />
                <Box  paddingX={2}>
                    <IconButton aria-label="save" icon={<FaSave />} onClick={handleUpdate}/>
                </Box>
            </InputGroup>
        </GridItem>


    </Grid>
       

        {error && <Text color="red.500">{error}</Text>}
    </VStack>
  )
}
export default SettingsPage