import React from "react";
import PageLayout from "./../../container/pageLayout/pageLayout";
import YourAccount from "./../../components/dashboard/yourAccount";
import { Flex, Text, SimpleGrid, Box, Center } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <PageLayout>
      <Flex w="100%" boxSizing="border-box">
        <Flex w="inherit" m="2rem" direction="column">
          <YourAccount balance={56262} accountNo={"25654965667469"} />
          <Text fontWeight="bold" mt="4rem" mb="2rem">
            Organizations
          </Text>
          <SimpleGrid minChildWidth="100px" gridGap="1rem">
            {org}
          </SimpleGrid>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default Dashboard;

const single = (
  <Center w="100px" h="100px" bg="red.500">
    Hello
  </Center>
);
const org = [
  single,
  single,
  single,
  single,
  single,
  single,
  single,
  single,
  single,
  single,
  single,
  single,
  single,
  single,
];
