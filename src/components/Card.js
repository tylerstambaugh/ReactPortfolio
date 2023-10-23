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
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, React } from "react";

const Card = ({ title, description, imageSrc }) => {
  const [showBack, setShowBack] = useState(false);

  const handleShowBack = () => {
    setShowBack(!showBack);
  };
  return (
    <>
      {!showBack ? (
        <Fade in={!showBack}>
          <Box p="40px" color="white" mt="4" rounded="md" shadow="md">
            <VStack borderRadius={"20px"} background={"whiteAlpha.800"}>
              <Image src={imageSrc} borderTopRadius={"20px"} />
              <Heading>{title}</Heading>
              <Text>{description}</Text>
              <Button
                onClick={handleShowBack}
                //variant="outline"
                colorScheme="blue"
                color="red"
              >
                <Text>See more</Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x" />
              </Button>
            </VStack>
          </Box>
        </Fade>
      ) : (
        <Fade in={showBack}>
          <Box p="40px" color="white" mt="4" rounded="md" shadow="md">
            <VStack>
              <Image src={imageSrc} />
              <Heading>{title}</Heading>
              <Text>this is the back</Text>
              <Button onClick={handleShowBack}>
                <Text>See more</Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x" />
              </Button>
            </VStack>
          </Box>
        </Fade>
      )}
    </>
  );
};

export default Card;
