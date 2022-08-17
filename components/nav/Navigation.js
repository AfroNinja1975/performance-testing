import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const logo = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  const textLogo = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box bg="black" p={5} w="100%" position="fixed" top="0" left="0" zIndex="10">
      <Flex justify="space-between" align="center">
        <Flex justify="flex-start" align="center">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/12/Los-Angeles-Kings-Logo-700x394.png"
            alt="LA Kings Logo"
            width={67}
            height={45}
          />
          <Image
            src="https://cms.nhl.bamgrid.com/images/photos/321078680/300x56/cut.png"
            alt="LA Kings Logo Text"
            width={125}
            height={23}
          />
        </Flex>
        <NavLinks />
      </Flex>
    </Box>
  );
};

export default Navigation;
