import React from "react";
import {
  Flex,
  Spacer,
  Heading,
  Text,
  Image,
  VStack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import FeaturesCard from "../../components/featuresCard";
import FeaturesCardTwo from "../../components/featuresCardv2";
import FeaturesCardLarge from "../../components/featuresCardLarge";
import { Faq } from "../../components/faq";
//images
// @ts-ignore
import homebg from "../../assets/images/home-bg.png";
// @ts-ignore
import homeCat from "../../assets/images/home-cat.png";
// @ts-ignore
import homeOne from "../../assets/images/1.png";
// @ts-ignore
import homeTwo from "../../assets/images/2.png";
// @ts-ignore
import homeThree from "../../assets/images/3.png";

import DefaultButton from "../../components/defaultButton";
import Testemonials from "./../../components/testemonials";

const Home = () => {
  return (
    <div>
      {/* View One */}
      <Flex
        backgroundPosition="center"
        bgSize="cover"
        backgroundRepeat="no-repeat"
        bgImage={homebg}
        w="100%"
        h="100vh"
        direction="column"
        alignItems="left"
        justifyContent="center"
      >
        <VStack spacing="1rem" w="60%" alignItems="start" ml="4rem">
          <Text color="#A1FE6B">LOGO Design</Text>
          <Heading lineHeight="1.1" size="4xl">
            Send your payment to your Friends.
          </Heading>
          <Text>Trusted Payment Service of Nepal.</Text>
          <Flex py="2rem" w="500px">
            <Button px="5rem" bg="#A1FE6B" color="black">
              Send Your Money
            </Button>
          </Flex>
        </VStack>
      </Flex>
      <Image
        zIndex="100"
        position="absolute"
        w="600px"
        right="0rem"
        top="12rem"
        src={homeCat}
        alt="cat"
      />
      {/*  View Two */}
      <Flex flexWrap="wrap" my="2rem" w="100%" justifyContent="space-around">
        {featureCard}
        {featureCard}
        {featureCard}
        {featureCard}
      </Flex>
      {/*  View Three */}
      <Flex flexWrap="wrap" w="100%" alignItems="center" minH="100vh">
        <Spacer />
        <Image objectFit="cover" w="auto" height="75vh" src={homeOne} />
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
      <Flex
        flexWrap="wrap"
        bg="#191A1A"
        p="1rem"
        w="100%"
        alignItems="center"
        minH="100vh"
      >
        <Flex alignItems="center" w="50%" direction="column">
          {featuresCardLarge}
        </Flex>
        <Spacer />
        <Image objectFit="cover" w="auto" height="70vh" src={homeTwo} />
        <Spacer />
      </Flex>
      {/*  View Five */}
      <Flex flexWrap="wrap" p="1rem" w="100%" alignItems="center" minH="100vh">
        <Spacer />
        <Image objectFit="cover" w="auto" height="70vh" src={homeThree} />
        <Spacer />
        <Flex alignItems="center" w="50%" direction="column">
          {featuresCardLarge}
        </Flex>
      </Flex>
      {/*  View Six */}
      <Flex
        flexWrap="wrap"
        p="1rem"
        w="100%"
        bg="#030303"
        direction="column"
        alignItems="center"
        justifyContent="start"
      >
        <Heading fontWeight="700" mb="2rem" color="white">
          Client Testemonials
        </Heading>
        <SimpleGrid minChildWidth="600px">
          <Testemonials
            imageLink="https://bit.ly/kent-c-dodds"
            company="DDC Milk"
            name="Ram Shyam Hari"
            testemony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus elementum, mi dictum mus neque, ultrices gravida. Id porttitor quisque proin posuere arcu vulputate et. Aliquam a, pulvinar dolor felis metus, malesuada risus, mauris consequat. Aliquam nisl dictum diam ac sed quis quisque."
          />
          <Testemonials
            imageLink="https://bit.ly/kent-c-dodds"
            company="LANCEME-UP"
            name="Ramesh Uncle Ko Choro"
            testemony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus elementum, mi dictum mus neque, ultrices gravida. Id porttitor quisque proin posuere arcu vulputate et. Aliquam a, pulvinar dolor felis metus, malesuada risus, mauris consequat. Aliquam nisl dictum diam ac sed quis quisque."
          />
        </SimpleGrid>
      </Flex>
      {/*  View Six */}
      <Flex
        flexWrap="wrap"
        p="1rem"
        w="100%"
        alignItems="center"
        justifyContent="center"
        direction="column"
        minH="100vh"
      >
        <Heading fontWeight="700" mb="2rem" color="white">
          FAQ's
        </Heading>
        <Faq />
      </Flex>
    </div>
  );
};

export default Home;

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
