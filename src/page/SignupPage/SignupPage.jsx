import { Box, Stack, Heading } from "@chakra-ui/react";
import SignupForm from "components/modules/NavBar/SignupForm/SignupForm";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/auth-operations";
import { getAuthError} from "../../redux/auth/auth-selectors";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";


const SignupPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);


  const onSignup = (data) => {
    dispatch(signup(data));
  };


  return (
    <Box p="6">
      <Stack spacing={6}>
        <Heading as="h2" size="md">
          Sign up{" "}
        </Heading>

        <SignupForm onSubmit={onSignup} />
        {status === 400 ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>A user with this name or email already exists <br/>
             {message}
            </AlertDescription>
          </Alert>
        ) : ""} 
      </Stack>
    </Box>
  );
};
export default SignupPage;
