import { Button, Divider, HStack, Heading,Box, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLink, FaRegUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";
import APIClient from "../services/api-client";
import { useUserContext } from "../hooks/UserProvider";

function Login(){
    const [show, setShow] = React.useState(false)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const toast = useToast()
    
    const { login } = useUserContext();
    const apiClient = new APIClient("/login")

    const handleLogin = () => {
        //Frontend validation
        if (!username || !password) {
            setError("All fields are required");
            return;
          }
        
        const userData = {
            username,
            password,
        };
        
        apiClient.register(userData)
        .then((response) => {
            setUsername("");
            setPassword("");
            setError("");
            console.log(response);

        // Check if the response has the access token
        if (response.data && response.data.access_token) {
            localStorage.setItem("access_token", response.data.access_token);
            
            login(username);
            //add redirect
            toast({
              title: "Logged In",
              description: "Login successful",
              status: "success",
              duration: 5000,
              isClosable: true,
            });

          } else {
            setError("Login failed. Please try again.");
          }
        })

        .catch((error) => {
            setError(error.response.data.message);
            console.log("Login error error:", error.response.data.message)
        });
    };


    return (
        <VStack>
            <Heading padding={5} size={"xl"}>Sign in</Heading>
            <InputGroup maxWidth={400}>   
                <InputLeftElement pointerEvents='none'>
                <FaRegUser />
                </InputLeftElement>
                <Input type='username' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username' />
                
            </InputGroup>
            <InputGroup maxWidth={400} size='md'>
            <InputLeftElement pointerEvents='none'>
                <MdOutlinePassword />      
            </InputLeftElement>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
                <InputRightElement width='2.8rem'>
                    <Button h='2rem' size='sm' onClick={() => setShow(!show)}>
                    {show ? <FaEyeSlash/> : <FaEye/>}
                    </Button>
                </InputRightElement>
            </InputGroup>

            {error && <Text color="red.500">{error}</Text>}

            <Box paddingY={3}>
                <Button onClick={handleLogin}>
                    Continue
                </Button>
            </Box>

            <Divider maxWidth={400}/>

            <Text fontSize={"xs"} color={"gray.400"}>
                new to Quoted?
            </Text>

            <Link to={"/register"}>
                <HStack>
                    <Text as="u" fontSize={"sm"}>
                        create an account 
                    </Text>
                    <FaLink />
                </HStack>
            </Link>
            
        </VStack>
    )
}
export default Login