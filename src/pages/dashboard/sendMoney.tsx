import React from "react";
import PageLayout from "./../../container/pageLayout/pageLayout";
import DefaultButton from "./../../components/defaultButton";
import DefaultInput from "./../../components/defaultInput";
import { VStack, HStack, Text, Box } from "@chakra-ui/react";
const SendMoney = () => {
  return (
    <PageLayout>
      <HStack alignItems="flex-start" m="2rem" textAlign="left" gap="4rem">
        <VStack alignItems="left" width="300px">
          <Text fontSize="lg" fontWeight="bold">
            Send Money to bank account
          </Text>
          <Text pb="1rem" fontSize="md">
            Enter phone number and amount and transafer money instantly{" "}
          </Text>
          <Text fontSize="xs">Amount:</Text>
          <DefaultInput placeholder="Rs:5000" />
          <Text fontSize="xs">Phone No:</Text>
          <DefaultInput placeholder="Eg: 98*********" />
          <Text fontSize="xs">Account No:</Text>
          <DefaultInput />
          <Text fontSize="xs">Account Name:</Text>
          <DefaultInput />
          <Text fontSize="xs">Bank Name:</Text>
          <DefaultInput />
          <Box textAlign="center" pt="1rem">
            <DefaultButton>Send</DefaultButton>
          </Box>
        </VStack>
        <VStack alignItems="left" width="300px">
          <Text fontSize="lg" fontWeight="bold">
            Send Money to Wallet
          </Text>
          <Text pb="1rem" fontSize="md">
            Enter phone number and amount and transafer money instantly{" "}
          </Text>
          <Text fontSize="xs">Amount:</Text>
          <DefaultInput placeholder="Rs:5000" />
          <Text fontSize="xs">Phone No:</Text>
          <DefaultInput placeholder="Eg: 98*********" />
          <Box textAlign="center" pt="1rem">
            <DefaultButton>Send</DefaultButton>
          </Box>
        </VStack>
      </HStack>
    </PageLayout>
  );
};

export default SendMoney;
