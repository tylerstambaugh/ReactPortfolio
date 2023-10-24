import {
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Fade,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState, React } from "react";

const Card = ({ title, shortDescription, imageSrc, longDescription }) => {
  const [showBack, setShowBack] = useState(false);

  const handleShowBack = () => {
    setShowBack(!showBack);
  };
  return (
    <>
      {!showBack ? (
        <Fade in={!showBack}>
          <Box color="white" mt="4" rounded="md" shadow="md">
            <VStack borderRadius={"20px"} background={"whitesmoke"}>
              <Image src={imageSrc} className="card-image" />
              <Heading>{title}</Heading>
              <Text className="card-text">{shortDescription}</Text>
              <Button onClick={handleShowBack} variant="outline">
                <Text color={"black"} className="pb-4">
                  See more
                </Text>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color={"black"}
                  size="1x"
                />
              </Button>
            </VStack>
          </Box>
        </Fade>
      ) : (
        <Fade in={showBack}>
          <Box p="40px" color="white" mt="4" rounded="md" shadow="md">
            <VStack background={"whitesmoke"}>
              <Heading className="card-heading">{title}</Heading>
              <Text className="card-text">{longDescription}</Text>
              <Button onClick={handleShowBack}>
                <Text color={"black"}>Back</Text>
                <FontAwesomeIcon icon={faArrowLeft} size="1x" />
              </Button>
            </VStack>
          </Box>
        </Fade>
      )}
    </>
  );
};

export default Card;
