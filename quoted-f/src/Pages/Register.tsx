import { Button, Divider, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaLink, FaRegCheckSquare, FaRegUser } from "react-icons/fa";
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";
import APIClient from "../services/api-client";

function Register(){
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [error, setError] = useState("");

    const toast = useToast()

    const apiClient = new APIClient("/register")

    const handleRegister = () => {
        //Frontend validation
        if (!username || !email || !password || !verifyPassword) {
            setError("All fields are required");
            return;
          }
        
        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
          }
        
        if (password !== verifyPassword) {
            setError("Passwords do not match");
            return;
          }
        
        const userData = {
            username,
            email,
            password,
        };
        
        apiClient.register(userData)
        .then((response) => {
            setUsername("");
            setEmail("");
            setPassword("");
            setVerifyPassword("");
            setError("");
            console.log("Registration successful:", response);
            toast({
                title: 'Account created.',
                description: "Registration successful",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
            
        })
        .catch((error) => {
            setError("Registration failed. Error: "+error);
            console.error("Registration error:", error);
        });
    };


    return (
        <VStack>
            <Heading padding={5} size={"xl"}>Sign up</Heading>
            <InputGroup maxWidth={400}>   
                <InputLeftElement pointerEvents='none'>
                <FaRegUser />
                </InputLeftElement>
                <Input type='username' onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                
            </InputGroup>

            <InputGroup maxWidth={400}>   
                <InputLeftElement pointerEvents='none'>
                <MdAlternateEmail />
                </InputLeftElement>
                <Input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                
            </InputGroup>
            

            <InputGroup maxWidth={400} size='md'>
            <InputLeftElement pointerEvents='none'>
                <MdOutlinePassword />      
            </InputLeftElement>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
                <InputRightElement width='2.8rem'>
                    <Button h='2rem' size='sm' onClick={() => setShow(!show)}>
                    {show ? <FaEyeSlash/> : <FaEye/>}
                    </Button>
                </InputRightElement>
            </InputGroup>

            <InputGroup maxWidth={400} size='md'>
            <InputLeftElement pointerEvents='none'>
                <FaRegCheckSquare />      
            </InputLeftElement>
            <Input
                pr='4.5rem'
                type={'password'}
                placeholder='Verify password'
                onChange={(e) => setVerifyPassword(e.target.value)}
            />
                
            </InputGroup>

            {error && <Text color="red">{error}</Text>}

            <Button onClick={handleRegister}>
                Continue
            </Button>

            <Divider padding={3} maxWidth={400}/>

            <Text fontSize={"xs"} color={"gray.400"}>
                have an account?
            </Text>

            <Link to={"/login"}>
                <HStack>
                    <Text as="u" fontSize={"sm"}>
                        sign in 
                    </Text>
                    <FaLink />
                </HStack>
            </Link>
            
        </VStack>
    )
    }

export default Register