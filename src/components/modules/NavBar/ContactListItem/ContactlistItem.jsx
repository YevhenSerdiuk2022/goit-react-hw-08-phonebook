import { MdDeleteForever } from "react-icons/md";
import { Box, Text, Flex, Spacer, Button, useColorMode } from "@chakra-ui/react";

export const ContactListItem = ({ contact, removeContact }) => {
  const {colorMode} = useColorMode();
  return (
    <Flex minWidth="420px" alignItems="center" p={2} borderBottom="2px">
      <Box>
        <Text color={colorMode === 'dark' ? 'white' : 'black'}>
          {contact.name}: {contact.number}
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Button
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
          onClick={() => removeContact(contact.id)}
        >
          <MdDeleteForever size={18} />
        </Button>
      </Box>
    </Flex>
  );
};
