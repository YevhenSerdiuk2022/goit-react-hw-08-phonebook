import {Flex, Button, Center} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "redux/auth/auth-selectors";
import { logout } from "redux/auth/auth-operations";

const NavbarUser = () => {
    const {name} = useSelector(getUser);
    const dispatch = useDispatch(getUser);
    const onLogout = () => dispatch(logout())
    
    return (
        <Flex gap={2}>
            <Center>{name}</Center>
         <Button   borderRadius="md"
          bg="teal"
          color="white"
          px={4}
          h={8}
          _hover={{ bg: "#049494" }}
          _active={{
            bg: "#049494",
            transform: "scale(0.89)",
          }}
          type="button"
          onClick={onLogout}
         >Logout</Button>
        </Flex>

    )
}
export default NavbarUser;