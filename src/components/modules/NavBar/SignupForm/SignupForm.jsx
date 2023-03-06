import { Box, Button } from "@chakra-ui/react";
import useForm from "../../../shared/hooks/useForm";
import initialState from "./initialState";
import {  FormControl, FormLabel, Input } from "@chakra-ui/react";

const SignupForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, password, email } = state;
  return (
    <Box maxW="440px" borderColor="teal" borderWidth="2px"  borderRadius="lg" p="6">
      <FormControl as="form" onSubmit={handleSubmit} isRequired>
        <FormLabel>First name</FormLabel>
        <Input
          value={name}
          onChange={handleChange}
          name="name"
          type="text"
          mb="2"
          placeholder="First name"
        />
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={handleChange}
          name="email"
          type="email"
          mb="2"
          placeholder="Email"
        />
        <FormLabel>Password</FormLabel>
        <Input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter password"
          mb="6"
         
        />
        <Button type="submit"
          borderRadius="md"
          bg="teal"
          color="white"
          px={4}
          h={8}
          _hover={{ bg: "#049494" }}
          _active={{
            bg: "#049494",
            transform: "scale(0.89)",
          }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
   
   
  );
};

export default SignupForm;
