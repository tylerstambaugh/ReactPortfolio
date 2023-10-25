import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/tylerstambaugh",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/tyler-stambaugh-b274a59/",
  },
  {
    icon: faPuzzlePiece,
    url: "https://exercism.org/profiles/tylerstambaugh",
  },
  {
    icon: faEnvelope,
    url: "mailto: tyler.stambaugh@icloud.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <div style={{ display: "flex" }}>
              {/* Add a link for downloading your resume */}
              <a
                href="./assets/documents/ResumeTylerJosephStambaugh.pdf"
                download="ResumeTylerJosephStambaugh.pdf"
                style={{ marginRight: "15px" }}
              >
                <FontAwesomeIcon icon={faFilePdf} size="2x" />
              </a>
              {socials.map((item, index) => (
                <a key={index} href={item.url} style={{ marginRight: "15px" }}>
                  {" "}
                  <FontAwesomeIcon icon={item.icon} size="2x" />{" "}
                </a>
              ))}
            </div>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>
                Now Featuring
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
              <a href="/#top" onClick={handleClick("top")}>
                Top
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
