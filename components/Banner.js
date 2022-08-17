import Image from 'next/image';
import { Center } from "@chakra-ui/react";

const Banner = ({image, alt}) => {
  return (
    <Center py={8}>
      <Image src={image} height="121" width="967" alt={alt} />
    </Center>
  );
};

export default Banner;