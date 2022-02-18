import { Stack, Text, Button } from "@chakra-ui/react";
import React from "react";

const featuresCardLarge = (props) => {
  console.log("running");
  return (
    <Stack maxW="500px" w={props.width ? props.width : "100%"}>
      <Text fontSize="sm" fontWeight="bold" color="green.400" lineHeight="1.5">
        - Lorem Lorem{" "}
      </Text>
      <Text color="white" fontWeight="bold" fontSize="3xl">
        {props.title}
      </Text>
      <Text color="gray.300" lineHeight="1.5" fontSize="xl">
        {props.discription}
      </Text>
      <Stack py="1.5rem">
        <Button color="black" colorScheme="green" w="240px">
          Get Started Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default featuresCardLarge;
