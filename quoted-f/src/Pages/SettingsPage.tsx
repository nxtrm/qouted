import { Box, Button, Input, InputGroup, InputLeftElement, VStack, useToast } from '@chakra-ui/react';
import { useUserContext } from '../hooks/UserProvider';
import APIClient from '../services/api-client';
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';

function SettingsPage() {
    const { username, userId, update } = useUserContext();
    const apiClient = new APIClient('/update/user');
    const toast = useToast()
    const [newUsername, setNewUsername] = useState("")

    const handleUpdate = async () => {

        const userData = {
            "username": username,
            "newUsername": newUsername
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
        USERNAME: {username}
        <InputGroup maxWidth={400}>   
                <InputLeftElement pointerEvents='none'>
                <FaRegUser />
                </InputLeftElement>
                <Input type='newUsername' onChange={(e) => setNewUsername(e.target.value)} value={newUsername} placeholder='New username' />
        </InputGroup>

        <Box paddingY={3}>
                <Button onClick={handleUpdate}>
                    Continue
                </Button>
        </Box>
    </VStack>
  )
}
export default SettingsPage