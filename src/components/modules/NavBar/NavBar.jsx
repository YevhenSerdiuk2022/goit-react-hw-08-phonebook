import { MdComputer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";
import useAuth from "components/shared/hooks/useAuth";
import { ColorModeSwitcher } from "components/ColorModeSwitcher/ColorModeSwitcher";
const NavBar = () => {
  const isLogin = useAuth();
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      borderBottom="2px"
      color="teal"
    >
      <Box p="4">
        <NavLink to="/">
          <MdComputer color="teal" size={24} />
        </NavLink>
      </Box>

      <Box p="4">
        <NavLink to="/">
          <Heading color="teal" size="md">
            Phonebook
          </Heading>
        </NavLink>
      </Box>
      <Spacer />

      {isLogin ? <NavbarUser /> : <NavbarAuth />}
      <ColorModeSwitcher/>
    </Flex>
  );
};
export default NavBar;
