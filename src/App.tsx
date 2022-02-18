import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Navbar from "./components/navbar";
import FeaturesCard from "./components/featuresCard";
import FeaturesCardTwo from "./components/featuresCardv2";
import FeaturesCardLarge from "./components/featuresCardLarge";
import { Faq } from "./components/faq";
import Footer from "./components/footer";

const app = () => {
  return (
    <Box bg="gray.900" w="100%" h="100%">
      <Navbar />
      {/* View One */}
      <Flex
        bgGradient="linear(to-r, green.200, pink.500)"
        w="100%"
        h="100vh"
      ></Flex>
      {/*  View Two */}
      <Flex my="2rem" w="100%" justifyContent="space-around">
        {featureCard}
        {featureCard}
        {featureCard}
        {featureCard}
      </Flex>
      {/*  View Three */}
      <Flex w="100%" alignItems="center" h="100vh">
        <Spacer />

        <Flex mx="1rem" direction="column" w="50%">
          {featuresCardLarge}

          <Flex my="1rem" w="80%" justifyContent="space-between">
            {featureCardTwo}
            {featureCardTwo}
          </Flex>
        </Flex>
      </Flex>
      {/*  View Four */}
      <Flex bg="gray.800" p="1rem" w="100%" alignItems="center" h="100vh">
        <Flex alignItems="center" w="50%" direction="column">
          {featuresCardLarge}
        </Flex>
        <Spacer />
      </Flex>
      {/*  View Five */}
      <Flex bg="gray.900" p="1rem" w="100%" alignItems="center" h="100vh">
        <Spacer />
        <Flex alignItems="center" w="50%" direction="column">
          {featuresCardLarge}
        </Flex>
      </Flex>
      {/*  View Six */}
      <Flex
        bg="gray.800"
        p="1rem"
        w="100%"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Faq />
      </Flex>
      <Footer />
    </Box>
  );
};

export default app;

const featureCard = (
  <FeaturesCard
    icon={<ArrowForwardIcon color="white" />}
    title="Load Money"
    discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, maxime!"
  />
);
const featureCardTwo = (
  <FeaturesCardTwo
    title="Lorem ipsum"
    discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, maxime!"
  />
);
const featuresCardLarge = (
  <FeaturesCardLarge
    title="Lorem ipsum"
    discription="        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum corporis officia, perspiciatis quia distinctio quidem pariatur autem iure iste a assumenda consequatur rem modi fugit?"
  />
);
