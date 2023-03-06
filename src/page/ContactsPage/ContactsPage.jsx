import { useEffect} from "react";
import ContactsForm from "components/modules/NavBar/ContactsForm/ContactsForm";
import {SimpleGrid , Center, Box, Heading, useColorMode} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getFilter, getFilterContacts } from "redux/contacts/contacts-selectors";
import { fetchContacts, addContact, removeContact } from "redux/contacts/contacts-operations";
import { ContactsList } from "../../components/modules/NavBar/ContactsList/ContactsList";
import Filter from "components/modules/NavBar/Filter/Filter";
import {filter} from '../../redux/filter/filter-slice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactsPage = () => {
  const {colorMode} = useColorMode();
const contacts = useSelector(getFilterContacts);
const value = useSelector(getFilter);
const dispatch = useDispatch();

useEffect(() => {
   dispatch(fetchContacts())
}, [dispatch]);

const onAddContact =(payload) => {
    dispatch(addContact(payload));
  }
  const onRemoveContact = (payload) => {
    dispatch(removeContact(payload));
  }
  const onFilter = ({target}) => {
    dispatch(filter(target.value));
}
    return (
        <Box>
            <Center>
            <Heading  m={8} padding="2" as='h2' size='md' color={colorMode === 'dark' ? 'white' : 'black'}>
        Contacts 
       </Heading>
            </Center>
       

        <SimpleGrid columns={2} spacing={10}>
          <Box  >      
          <ContactsForm onSubmit={onAddContact}/>
          </Box>
         <Box>
        <Filter onFilter={onFilter} value={value}/>
        </Box>
        </SimpleGrid>   
         <Box>
        <ContactsList  contacts={contacts} removeContact={onRemoveContact}/>
         </Box>
         <ToastContainer autoClose={3000}  /> 
      </Box>
    )
}

export default ContactsPage;