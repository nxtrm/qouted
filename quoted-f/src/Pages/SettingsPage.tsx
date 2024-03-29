import { Box,Text, HStack, Button, Input, InputGroup, InputLeftElement, VStack, useToast, Heading, SimpleGrid, Grid, GridItem } from '@chakra-ui/react';
import { useUserContext } from '../Providers/UserProvider';
import APIClient from '../services/api-client';
import { useEffect, useState } from 'react';
import { FaRegUser, FaSave } from 'react-icons/fa';

function SettingsPage() {
    const { username, userId, update, email } = useUserContext();
    
    const apiClient = new APIClient('/update/user');
    const toast = useToast()
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [error, setError] = useState("");
    
    useEffect(() => {
        if (username) {
            setNewUsername(username);
        }
        if (email) {
            setNewEmail(email);
        }
    }, []);

    const handleUpdate = async () => {

        const userData = {
            "userId": userId,
            "newUsername": newUsername,
            "newEmail" : newEmail
          }

        if ((newUsername != username) && (newUsername.length < 4)) {
            setError("Username cannot be shorter than 4 letters")
        }

        if ((newEmail != email) && (newEmail.length < 4)) {
            setError("Username cannot be shorter than 4 letters")
        }
        
        apiClient.updateUser(userData)
        .then((response) => {
            if (response.message) {
                update(newUsername , null, null);
                toast({
                    title: "Updated username",
                    status: "success",
                    isClosable: true,
                })
            } 
            if (response.error) {
             setError(error)
            }
        })
        .catch((error) => {
            console.error("User update error", error);
           
        });
    }

  return (
    <VStack>
    <Heading padding={5}>Account Settings</Heading>
    <Grid padding={1} templateColumns='repeat(3, 1fr)'  templateRows='repeat(2, 1fr)' gap={6}>
        <GridItem rowSpan={1} colSpan={1}>
                <Heading paddingTop={2} fontSize={"xl"}>Username:</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
                <InputGroup maxWidth={400}>   
                        <InputLeftElement pointerEvents='none'>
                        <FaRegUser />
                        </InputLeftElement>
                        <Input type='newUsername' onChange={(e) => setNewUsername(e.target.value)} value={newUsername} placeholder={"Username"} />
                </InputGroup>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
            <Heading paddingTop={2} fontSize={"xl"}>Email:</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
            <InputGroup maxWidth={400}>   
                    <InputLeftElement pointerEvents='none'>
                    <FaRegUser />
                    </InputLeftElement>
                    <Input type='newEmail' onChange={(e) => setNewEmail(e.target.value)} value={newEmail}/>
            </InputGroup>
        </GridItem>
    </Grid>
        {error && <Text color="red.500">{error}</Text>}
        <Box padding={3}>
             <Button onClick={handleUpdate}>
                <FaSave />
                <Text paddingLeft={3}>Save</Text>
             </Button>
        </Box>
       

    </VStack>
  )
}
export default SettingsPage