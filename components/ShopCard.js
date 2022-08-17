import Image from "next/image";
import {
  Box,
  Button,
  Center,
  Flex,
  Link,
  Heading,
  Text,
} from "@chakra-ui/react";

const ShopCard = () => {
  return (
    <Flex direction="column" w="498px" style={{ alignSelf: "stretch" }}>
      <Heading as="h2" size="lg" mb={4}>
        Featured Product
      </Heading>
      <Link
        href="https://www.nhlshop.com/"
        borderRadius="10px"
        h="100%"
        bg="#FFFFFF"
        overflow="hidden"
        position="relative"
        textAlign="center"
      >
        <Flex
          direction="column"
          position="absolute"
          top="0"
          left="0"
          w="100%"
          p={4}
          zIndex="1"
        >
          <Text fontSize="xs" color="#FFCC33" textAlign="left">
            NEW
          </Text>
          <Heading as="h2" size="md" color="#000000" textAlign="left">
            LA Kings &quot;On the Ice&quot; Snapback Cap
          </Heading>
        </Flex>
        <Image
          src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4464000/ff_4464752-163e2be83c6e9b688e2e_full.jpg"
          height={400}
          width={400}
          alt="Featured Product"
        />
        <Box position="absolute" bottom="0" left="0" w="100%" p={6}>
          <Flex align="center" justify="space-between">
            <Flex
              direction="column"
            >
              <Heading
                as="h3"
                size="lg"
                pb={2}
                textAlign="left"
                color="#FF3333"
              >
                $29.99
              </Heading>
              <Text fontSize="xs" textAlign="left">
                One Size Fits All
              </Text>
            </Flex>
            <Button>Add to Cart</Button>
          </Flex>
        </Box>
      </Link>
    </Flex>
  );
};

export default ShopCard;
