import React from "react";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import PageLayout from "./../../container/pageLayout/pageLayout";

const Transaction = () => {
  return (
    <PageLayout>
      <Tabs m="2rem">
        <TabList borderColor="blackAlpha.100">
          <Tab _selected={{ borderColor: "#A1FE6B" }}>All</Tab>
          <Tab _selected={{ borderColor: "#A1FE6B" }}>Received</Tab>
          <Tab _selected={{ borderColor: "#A1FE6B" }}>Send</Tab>
          <Tab _selected={{ borderColor: "#A1FE6B" }}>Withdraw</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageLayout>
  );
};

export default Transaction;
