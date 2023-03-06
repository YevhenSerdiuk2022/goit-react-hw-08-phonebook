import { Box, Button, useColorMode } from "@chakra-ui/react";
import useForm from "../../../shared/hooks/useForm";
import initialState from "./initialState";
import { Center, FormControl, FormLabel, Input } from "@chakra-ui/react";
import{MdPersonAdd} from 'react-icons/md';


const ContactsForm = ({ onSubmit }) => {
  const {colorMode} = useColorMode();
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const {  name, number } = state;
  return (
    <Box maxW="440px" borderColor="teal" borderWidth="2px"  borderRadius="lg" p="6">
      <FormControl as="form" onSubmit={handleSubmit} isRequired>
        <FormLabel color={colorMode === 'dark' ? 'white' : 'black'}>Name</FormLabel>
        <Input
          value={name}
          onChange={handleChange}
          name="name"
          type="text"
          mb="2"
          placeholder=" Name"
        />
        <FormLabel color={colorMode === 'dark' ? 'white' : 'black'}>Number</FormLabel>
        <Input
          value={number}
          onChange={handleChange}
          name="number"
          type="text"
          placeholder="number"
          mb="6"
         
        />
<Center>
       
  <Button  type="submit"
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
  leftIcon={<MdPersonAdd />} colorScheme='teal' variant='solid'>
   Contact
  </Button>
</Center>
 

       
      </FormControl>
    </Box>
   
   
  );
};

export default ContactsForm;