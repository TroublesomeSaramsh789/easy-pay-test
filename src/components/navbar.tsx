import { Flex, Text, Input, Spacer, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      color="gray.50"
      bg="#1B1B1B"
      py="0.5rem"
      px="1rem"
      w="100%"
    >
      <Link to="/">
        <Heading color="white">
          <Heading as="span" display="inline" color="#A1FE6B">
            Easy
          </Heading>
          PAY
        </Heading>
      </Link>
      <Spacer />

      <Input
        textAlign="center"
        color="gray.50"
        bg="#3F3F3F"
        borderRadius="0.3rem"
        maxW="300px"
        size="sm"
        type="text"
        placeholder="Search for anything"
      />
      <Spacer />
      <Link to="/login">
        <Text mx="1rem" fontSize="md">
          Login
        </Text>
      </Link>
      <Link to="register">
        <Text mx="1rem" fontSize="md">
          Register
        </Text>
      </Link>
    </Flex>
  );
};

export default Navbar;
