import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import {React, useState} from 'react'
import Signup from './Signup';
import Login from './Login';
import GoogleAuth from './GoogleAuth';


const AuthForm = () => {
    const[isLogin, setIsLogIn] = useState(true);

  return (
   <>
   <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <VStack spacing={4}>
        <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />

       {isLogin ? <Login />: <Signup />}

        {/* Or Text */}
        <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={1} bg={"gray.400"}/>
            <Text mx={1} color={"white"}>OR</Text>
            <Box flex={2} h={1} bg={"gray.400"}/>
        </Flex>
        {/* Log In */}
        <GoogleAuth prefix={isLogin ? "Log in" : "Sign Up"}/>
    </VStack>
   </Box>

   <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <Flex alignItems={"center"} justifyContent={"center"}>
        <Box mx={2} fontSize={14}>
            {isLogin ? "Dont have an account?": "Already have an account"}
        </Box>
        <Box onClick={() => setIsLogIn(!isLogin)} color={"blue.500"} cursor={"pointer"}>
            {isLogin ? "Sign Up": "Log in"}
        </Box>
    </Flex>
   </Box>
   </>
  )
}

export default AuthForm