import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Segment Sniper",
    shortDescription:
      "A .Net Web API / React project that integrates with Strava to allow athletes to analyze workout data efficiently ",
    getImageSrc: () => require("../images/photo1.jpg"),
    longDescription: "long description text goes here",
  },
  {
    title: "Eleven Fifty Academy",
    shortDescription: `In May of 2022 I completed Eleven Fifty Academy's Software Development Course. This entailed over 600 hours of course 
      instruction and lab time learning to build and maintain .Net applications. It was a fantastic experience that allowed 
      me to rapidly build on the knowledge I'd gained over the years working with software engineers and transition to
       software engineering.`,
    getImageSrc: () => require("../images/photo2.jpg"),
    longDescription: "long description text goes here",
  },
  {
    title: "Mario Kart Kup Skorer",
    shortDescription:
      "A .Net Web API / MVC application used to solve the real world problems of tracking Mario Kart Kup scoring across game sessions.",
    getImageSrc: () => require("../assets/images/"),
    longDescription: "long description text goes here",
  },
  {
    title: "Event planner",
    shortDescription:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    longDescription: "long description text goes here",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Now Featuring
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            shortDescription={project.shortDescription}
            imageSrc={project.getImageSrc()}
            longDescription={project.longDescription}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
