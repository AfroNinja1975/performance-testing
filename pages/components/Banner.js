import Image from "next/image";

const Banner = ({ image }) => {
  return (
    <div className="my-20 mx-auto">
      <Image src={image} height="121" width="967" alt="banner" />
    </div>
  );
};

export default Banner;
