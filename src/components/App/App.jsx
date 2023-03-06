import { Container, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from 'components/modules/NavBar/NavBar';
import UserRoutes from 'components/UserRoutes';
import { current } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current())
  }, [dispatch]);
  return (
    <Container maxW='960px'>
      <Box padding='4' color='black' >
        <NavBar/>
        <UserRoutes/>
        
    
      </Box>
     
    </Container>
  );
};
