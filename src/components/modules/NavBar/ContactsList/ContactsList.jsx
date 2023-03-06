import { WrapItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { ContactListItem } from "../ContactListItem/ContactlistItem";
import { Box } from "@chakra-ui/react";

export const ContactsList = ({ contacts, removeContact }) => {
  return (
    <Box mt={12} >
      {contacts.map((contact) => (
        <WrapItem  key={contact.id}>
       
          <ContactListItem contact={contact} removeContact={removeContact} />
        </WrapItem>
      ))}
    </Box>
  );
};

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};
