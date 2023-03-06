import { Box, Stack, Heading, useColorMode } from "@chakra-ui/react";
import LoginForm from "components/modules/NavBar/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { getAuthError } from "../../redux/auth/auth-selectors";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";


const LoginPage = () => {
  const {colorMode} = useColorMode();
  const dispatch = useDispatch();
  const { status, message} = useSelector(getAuthError);


  const onLogin = (data) => {
    dispatch(login(data));
  };


  return (
    <Box p="6">
      <Stack spacing={6}>
        <Heading as="h2" size="md" color={colorMode === 'dark' ? 'white' : 'black'}>
         Login{" "}
        </Heading>
        <LoginForm onSubmit={onLogin}/>

       
        {status === 400 ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>A  this email or password is incorrect <br/>
            {message}
            </AlertDescription>
          </Alert>
        ) : ""}
      </Stack>
    </Box>
  );
};
export default LoginPage;