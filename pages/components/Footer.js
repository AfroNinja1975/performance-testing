import styles from "../../styles/Home.module.css";
import Image from "next/image";

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

export const Footer = () => (
  <div className="bg-gray-700 p-10">
    <div className="flex flex-no-wrap w-full max-w-screen-2xl m-auto mb-10 space-x-7 items-center justify-start">
      <div className="w-3/12">
        <Image
          layout="fixed"
          height={167}
          width={250}
          src="https://logos-world.net/wp-content/uploads/2020/12/Los-Angeles-Kings-Logo-700x394.png"
          alt="Logo"
        />
      </div>
      <div className="flex-column items-start">
        <div className="flex items-center justify-start mb-4">
          {topLinks.map(({ link, text }, index) => {
            return (
              <a
                className="no-underline mr-3 text-white text-sm"
                href={link}
                key={index}
              >
                {text}
              </a>
            );
          })}
        </div>
        <p className="text-xs text-gray-300">
          lakings.com is the official Web site of the Los Angeles Kings. Los
          Angeles Kings is a trademark of Los Angeles Kings, LLC. NHL, the NHL
          Shield, the word mark and image of the Stanley Cup and NHL Conference
          logos are registered trademarks of the National Hockey League. All NHL
          logos and marks and NHL team logos and marks as well as all other
          proprietary materials depicted herein are the property of the NHL and
          the respective NHL teams and may not be reproduced without the prior
          written consent of NHL Enterprises, L.P. Copyright © 1999-2019 Los
          Angeles Kings, LLC and the National Hockey League. All Rights
          Reserved.
        </p>
      </div>
    </div>
    <div className="flex flex-no-wrap w-full max-w-screen-2xl m-auto space-x-7 items-center justify-start">
      <Image
        layout="fixed"
        height={61}
        width={250}
        src="https://www-league.nhlstatic.com/images/logos/league-dark/133-com.svg"
        alt="NHL Logo"
      />
      <div className="flex items-center justify-start">
        {bottomLinks.map(({ link, text }, index) => {
          return (
            <a
              className="no-underline mr-3 text-white text-xs"
              href={link}
              key={index}
            >
              {text}
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

export default Footer;
