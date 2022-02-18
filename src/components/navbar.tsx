import { Flex, Text, Input, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex color="gray.50" bg="gray.800" py="0.5rem" px="1rem" w="100%">
      <Text mx="1rem" fontSize="xl">
        EasyPAY
      </Text>
      <Spacer />

      <Input
        textAlign="center"
        color="gray.50"
        bg="gray.700"
        borderRadius="0.3rem"
        maxW="300px"
        size="sm"
        type="text"
        placeholder="Search for anything"
      />
      <Spacer />
      <Text mx="1rem" fontSize="md">
        Login
      </Text>
      <Text mx="1rem" fontSize="md">
        Register
      </Text>
    </Flex>
  );
};

export default Navbar;
