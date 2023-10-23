import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Headshot from "../assets/images/headshot_sized.png";

const greeting = "Howdy, I am Tyler!";
const bio1 = "A full stack developer";
const bio2 = "and exceptional problem solver";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar name="headshot" src={Headshot} size="x1" />
    <Heading>{greeting}</Heading>
    <VStack>
      <Box>{bio1}</Box>
      <Box>{bio2}</Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
