import Image from "next/image";
import { Center, Flex, Link, Heading, Text } from "@chakra-ui/react";

const NewsCard = () => {
  return (
    <Flex direction="column" w="498px" style={{ alignSelf: "stretch" }}>
      <Heading as="h2" size="lg" mb={4}>
        Top Story
      </Heading>
      <Link
        href="https://www.nhlshop.com/"
        borderRadius="10px"
        h="100%"
        bg="#FFFFFF"
        overflow="hidden"
        position="relative"
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
          <Text fontSize="xs" color="#DDDDDD">
            BREAKING STORY
          </Text>
          <Heading as="h2" size="md" color="#FFFFFF">
            Dustin Brown to retire
          </Heading>
        </Flex>
        <Image
          src="https://cdn.vox-cdn.com/thumbor/7Dakrrzay6RgNFh1EsH5j370tqY=/0x0:4000x2667/1200x800/filters:focal(1680x1014:2320x1654)/cdn.vox-cdn.com/uploads/chorus_image/image/65483999/1180921065.jpg.0.jpg"
          height={332}
          width={498}
          alt="Top Story"
        />
        <Flex direction="column" px={6} pt={4} pb={6}>
          <Heading as="h2" size="md" pb={2}>
            Kings to Retire Dustin Brown‘s No. 23 and Unveil Statue
          </Heading>
          <Text fontSize="xs">
            Ceremony to Honor Two-Time Stanley Cup Captain and Franchise Icon
            Set for Feb. 11 at Crypto.com Arena
          </Text>
        </Flex>
      </Link>
    </Flex>
  );

}

export default NewsCard;