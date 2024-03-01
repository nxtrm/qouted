import { Button, Divider, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaEye, FaEyeSlash, FaLink, FaRegUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Link } from "react-router-dom";

function Login(){
    const [show, setShow] = React.useState(false)

    return (
        <VStack>
            <Heading padding={5} size={"xl"}>Sign in</Heading>
            <InputGroup maxWidth={400}>   
                <InputLeftElement pointerEvents='none'>
                <FaRegUser />
                </InputLeftElement>
                <Input type='username' placeholder='Username' />
                
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

            <Button >
                Continue
            </Button>

            <Divider padding={3} maxWidth={400}/>

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