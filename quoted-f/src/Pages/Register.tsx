import { Button, Divider, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaEye, FaEyeSlash, FaLink, FaRegCheckSquare, FaRegUser } from "react-icons/fa";
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";

function Register(){
    const [show, setShow] = React.useState(false)

    return (
        <VStack>
            <Heading padding={5} size={"xl"}>Sign up</Heading>
            <InputGroup maxWidth={400}>   
                <InputLeftElement pointerEvents='none'>
                <FaRegUser />
                </InputLeftElement>
                <Input type='username' placeholder='Username' />
                
            </InputGroup>

            <InputGroup maxWidth={400}>   
                <InputLeftElement pointerEvents='none'>
                <MdAlternateEmail />
                </InputLeftElement>
                <Input type='email' placeholder='email' />
                
            </InputGroup>
            

            <InputGroup maxWidth={400} size='md'>
            <InputLeftElement pointerEvents='none'>
                <MdOutlinePassword />      
            </InputLeftElement>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Password'
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
            />
                
            </InputGroup>

            <Button >
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