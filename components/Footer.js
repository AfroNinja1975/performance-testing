import Image from "next/image";
import NextLink from "next/link";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";

export const topLinks = [
  {
    link: "#",
    text: "KINGS PRIVACY POLICY",
  },
  {
    link: "#",
    text: "TERMS OF USE",
  },
  {
    link: "#",
    text: "DO NOT SELL MY INFO",
  },
  {
    link: "#",
    text: "CONTACT US",
  },
  {
    link: "#",
    text: "SPONSORSHIP",
  },
  {
    link: "#",
    text: "EMPLOYMENT OPPORTUNITIES",
  },
  {
    link: "#",
    text: "CRYPTO.COM ARENA",
  },
];

export const bottomLinks = [
  {
    link: "#",
    text: "FAQ",
  },
  {
    link: "#",
    text: "ABOUT US",
  },
  {
    link: "#",
    text: "EMPLOYMENT",
  },
  {
    link: "#",
    text: "COPYRIGHT POLICY",
  },
  {
    link: "#",
    text: "NHL.COM PRIVACY POLICY",
  },
  {
    link: "#",
    text: "NHL.COM TERMS OF SERVICE",
  },
];

const Footer = () => {
  return (
    <Box bg="#444444" w="100%" p={8}>
      <Center>
        <Flex direction="column" w="100%" maxW="1200px">
          <Flex align="center" justify="flex-start" w="100%" mb={3}>
            <Box>
              <Image
                layout="fixed"
                height={167}
                width={250}
                src="https://logos-world.net/wp-content/uploads/2020/12/Los-Angeles-Kings-Logo-700x394.png"
                alt="Logo"
              />
            </Box>
            <Box ml={5}>
              {topLinks.map(({ link, text }, index) => {
                return (
                  <NextLink href={link} key={index} passHref>
                    <Link color="#FFFFFF" fontSize="md" mr={2}>
                      {text}
                    </Link>
                  </NextLink>
                );
              })}
              <Box mt={3}>
                <Text fontSize="xs" color="#DDDDDD">
                  lakings.com is the official Web site of the Los Angeles Kings.
                  Los Angeles Kings is a trademark of Los Angeles Kings, LLC.
                  NHL, the NHL Shield, the word mark and image of the Stanley
                  Cup and NHL Conference logos are registered trademarks of the
                  National Hockey League. All NHL logos and marks and NHL team
                  logos and marks as well as all other proprietary materials
                  depicted herein are the property of the NHL and the respective
                  NHL teams and may not be reproduced without the prior written
                  consent of NHL Enterprises, L.P. Copyright © 1999-2019 Los
                  Angeles Kings, LLC and the National Hockey League. All Rights
                  Reserved.
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex align="center" justify="flex-start" w="100%">
            <Box>
              <Image
                layout="fixed"
                height={61}
                width={250}
                src="https://www-league.nhlstatic.com/images/logos/league-dark/133-com.svg"
                alt="NHL Logo"
              />
            </Box>
            <Box ml={5}>
              {bottomLinks.map(({ link, text }, index) => {
                return (
                  <NextLink href={link} key={index} passHref>
                    <Link color="#FFFFFF" fontSize="sm" mr={2}>
                      {text}
                    </Link>
                  </NextLink>
                );
              })}
            </Box>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default Footer;