import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from "@chakra-ui/icons";

const FeaturesCardTwo = (props) => {
  console.log("running")
  return (
    <Stack  w="260px" bg="gray.900">
        <Text  color="white" fontWeight="bold" fontSize="xl">{props.title}</Text>
        <Text color="gray.300" lineHeight="1.5" >{props.discription}</Text>
        <Text fontWeight="semibold" color="yellow.400" lineHeight="1.5" >Read More <ArrowForwardIcon color="yellow.400" /></Text>
    </Stack>
  )
}

export default FeaturesCardTwo