import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Segment Sniper",
    shortDescription:
      "A .Net Web API / React project that integrates with Strava to allow athletes to analyze workout data efficiently.",
    getImageSrc: () => require("../assets/images/segmentSniperScreenshot.png"),
    longDescription: (
      <>
        <p>
          I've been an bicycle racer for many years and have user Strava to
          track my performance. When I got into writing software and found out
          that they had an open API, I began writing a companion app to automate
          a routine data analysis task.
        </p>
        <br />
        <p>
          This tool allows users to interrogate data from their activities and
          find segments where they are close to the leader.
        </p>
        <br />
        <p>It is built using:</p>
        <ul>
          <li>.Net 7 Web API backend on SQL Server via Entity Framework</li>
          <li>Vite React frontend using Typescript</li>
          <li>Custom JWT authentication and authorization</li>
          <li>SOA adhering to SOLID principles</li>
        </ul>
      </>
    ),
  },
  {
    title: "Eleven Fifty Academy",
    shortDescription: `In May of 2022 I completed Eleven Fifty Academy's Software Development Course. This entailed over 600 hours of course 
      instruction and lab time learning to build and maintain .Net applications. It was a fantastic experience that allowed 
      me to rapidly build on the knowledge I'd gained over the years working with software engineers and transition to
       software engineering.`,
    getImageSrc: () => require("../assets/images/efa.png"),
    longDescription: "long description text goes here",
  },
  {
    title: "Mario Kart Kup Skorer",
    shortDescription:
      "A .Net Web API / MVC application used to solve the real world problems of tracking Mario Kart Kup scoring across game sessions.",
    getImageSrc: () => require("../assets/images/mkKupSkorer.png"),
    longDescription: "long description text goes here",
  },
  {
    title: "Exercism-ing",
    shortDescription: (
      <span>
        I continue to hone my skills and learn new ones by routinely completing
        coding katas on Exercism.org. You can see my progress{" "}
        <a href="https://exercism.org/profiles/tylerstambaugh">here</a>
      </span>
    ),
    getImageSrc: () => require("../assets/images/exercismScreenshot.png"),
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
        className={"box"}
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
