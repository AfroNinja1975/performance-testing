import { Center, Flex } from "@chakra-ui/react";
import Banner from "./Banner";
import NewsCard from "./NewsCard";
import Other from "./Other";
import ShopCard from "./ShopCard";

const Body = () => {
  return (
    <Center py={24}>
      <Flex direction="column" w="100%" maxW="1040px" minH="100vh">
        <Banner
          image="https://tpc.googlesyndication.com/simgad/13682594288002787745"
          alt="Top Banner"
        />
        <Flex align="flex-start" justify="space-between" w="100%" my={3}>
          <NewsCard />
          <ShopCard />
        </Flex>
        <Banner
          image="https://tpc.googlesyndication.com/simgad/8572446148985133851"
          alt="Bottom Banner"
        />
        <Other />
      </Flex>
    </Center>
  );
}

export default Body;