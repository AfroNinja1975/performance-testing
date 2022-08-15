import NavItems from './NavItems';
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="bg-black fixed top-0 left-0 z-10 w-full flex flex-row items-center justify-between py-4 px-10">
      <div className="flex items-center justify-start">
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
      </div>
      <NavItems />
    </div>
  );
}

export default Navigation;