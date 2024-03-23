import { Button, useToast } from '@chakra-ui/react';
import { useUserContext } from '../hooks/UserProvider';
import APIClient from '../services/api-client';
import { useState } from 'react';

function SettingsPage() {
    const { username, userId, update } = useUserContext();
    const apiClient = new APIClient('/update/user');
    const toast = useToast()
    const [newUsername, setNewUsername] = useState("")

    const handleUpdate = async () => {
        setNewUsername("chips") 

        const userData = {
            "username": username,
            "newUsername": "chips"
          }
        
        apiClient.updateUser(userData)
        .then((response) => {
            if (response) {
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
    <div>
        USERNAME: {username}
        <Button padding={5} onClick={handleUpdate}>Update</Button>
    </div>
  )
}
export default SettingsPage