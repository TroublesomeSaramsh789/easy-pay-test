import { PhoneIcon, EmailIcon, TriangleDownIcon } from "@chakra-ui/icons";

import { Flex, Text, Box, Input, Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex color="white" p="2rem" w="100%">
      <Flex direction="column" w="40%">
        <Text fontWeight="semibold" color="white" fontSize="3xl">
          <Box display="inline" color="green.400">
            Easy
          </Box>
          PAY
        </Text>
        <Text color="gray.200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima
          officiis magni temporibus deleniti accusantium enim quis, voluptas
          nesciunt cupiditate ipsam necessitatibus fugiat! Eveniet, quibusdam?
        </Text>
      </Flex>
      <Flex justifyContent="space-between" w="60%">
        <Flex direction="column" w="58%">
          <Text fontWeight="bold"> STAY CONNECTED</Text>
          <Input bg="gray.100" w="200px" placeholder="Enter Your Email" />
          <Text mt="2rem">
            <TriangleDownIcon mr="0.5rem" /> Baneshwor, Kathmandu, Nepal
          </Text>
          <Text mt="0.5rem">
            <PhoneIcon mr="0.5rem" />
            +977-910000000
          </Text>
          <Text mt="0.5rem">
            <EmailIcon mr="0.5rem" /> test@mail.com
          </Text>
        </Flex>
        <Flex direction="column" w="40%">
          <Text fontWeight="bold"> CONNECT WITH US</Text>
          <Flex my="1.5rem" w="100%" justifyContent="space-around">
            <EmailIcon />
            <PhoneIcon />

            <EmailIcon />
            <PhoneIcon />
          </Flex>
          <Text fontWeight="bold"> SOON ON:</Text>
          <Flex w="100%" direction="column" justifyContent="space-around">
            <Button my="0.25rem" colorScheme="whatsapp">
              Google Play
            </Button>{" "}
            <Button my="0.25rem" colorScheme="orange">
              App Store
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
