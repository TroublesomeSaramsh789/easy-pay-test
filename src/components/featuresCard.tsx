import { Stack, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from 'react'

const FeaturesCard = (props) => {
  console.log("running")
  return (
    <Stack p="1rem" w="260px" bg="gray.900">
        {props.icon}
        <Text py="1rem" color="white" fontWeight="bold" fontSize="xl">{props.title}</Text>
        <Text color="gray.300" lineHeight="1.5" >{props.discription}</Text>
    </Stack>
  )
}

export default FeaturesCard