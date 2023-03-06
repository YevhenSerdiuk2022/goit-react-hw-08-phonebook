import { NavLink } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const NavbarAuth = () => {
  return (
    <Flex  gap={2}>
      <Box as="button"  borderRadius="md" bg="teal" color="white" px={4} h={8}
       _hover={{ bg: '#049494' }}
       _active={{
         bg: '#049494',
         transform: 'scale(0.89)',
         
       }}
     >
        <NavLink to="/signup">Sign Up</NavLink>
      </Box>

      <Box as="button"  borderRadius="md" bg="teal" color="white" px={4} h={8}
         _hover={{ bg: '#049494' }}
         _active={{
           bg: '#049494',
           transform: 'scale(0.89)',
           
         }}
        >
        <NavLink to="/login">Login</NavLink>
      </Box>
    </Flex>
  );
};

export default NavbarAuth; 
