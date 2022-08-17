import Image from "next/image";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

const Other = () => {
  return (
    <Flex
      direction="column"
      bg="#FFFFFF"
      borderRadius="10px"
      overflow="hidden"
      boxShadow="2xl"
      px={6}
      py={3}
    >
      <Link
        href="https://runsignup.com/Race/CA/RedondoBeach/LAKings5KinRedondoBeach"
        my={3}
      >
        <Flex align="center" justify="flex-start">
          <Image
            src="https://cms.nhl.bamgrid.com/images/photos/335101762/1704x960/cut.jpg"
            height={113}
            width={200}
            alt="Top Story"
          />
          <Box ml={4}>
            <Heading as="h2" size="md" pb={2}>
              Join the LA Kings birthday Club!
            </Heading>
            <Text fontSize="xs">
              On your birthday, you&apos;ll receive: Two (2) complimentary
              tickets*, Up to 25% off additional tickets you purchase, 10% off
              at TEAM LA online
            </Text>
          </Box>
        </Flex>
      </Link>
      <Link href="https://www.nhl.com/kings/fans/birthday" my={3}>
        <Flex align="center" justify="flex-start">
          <Image
            src="https://cms.nhl.bamgrid.com/images/photos/335101428/1136x640/cut.jpg"
            height={113}
            width={200}
            alt="Top Story"
          />
          <Box ml={4}>
            <Heading as="h2" size="md" pb={2}>
              LA Kings 5K In Redondo Beach
            </Heading>
            <Text fontSize="xs">
              The 5K is set to take place on September 10th at 8:00am and will
              be held in the beautiful Riviera Village area of South Redondo
              Beach.
            </Text>
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
}

export default Other;