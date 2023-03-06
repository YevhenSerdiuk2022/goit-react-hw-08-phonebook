import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Filter = ({ onFilter, value }) => {
  return (
    <Box
      maxW="440px"
      borderColor="teal"
      borderWidth="2px"
      borderRadius="lg"
      p="6"
    >
      <FormControl as="form" isRequired>
        <FormLabel> Find contacts by name</FormLabel>
        <Input
          value={value}
          onChange={onFilter}
          name="filter"
          type="text"
          mb="2"
          placeholder=" Name"
        />
      </FormControl>
    </Box>
  );
};
export default Filter;
