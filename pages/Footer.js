import { Container, Col, Grid, Row, Link, Text, Image } from "@nextui-org/react";
import styles from "../styles/Home.module.css";

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
  <>
    <Grid.Container
      alignItems="center"
      justify="center"
      wrap="nowrap"
      style={{ maxWidth: "1200px", margin: "auto" }}
    >
      <Grid xs={8} md={3}>
        <Image
          height={167}
          width={250}
          src="https://cms.nhl.bamgrid.com/images/assets/binary/308180580/binary-file/file.svg"
          alt="Logo"
        />
      </Grid>
      <Grid md={9}>
        <Grid.Container alignItems="center" justify="flex-start">
          {topLinks.map(({ link, text }, index) => {
            return (
              <Grid
                style={{ padding: "0", margin: "0 10px 5px 0" }}
                key={`top-${index}`}
              >
                <Link
                  href={link}
                  key={index}
                  style={{ padding: "0", margin: "0" }}
                >
                  <Text size={14} style={{ color: "#CCCCCC" }}>
                    {text}
                  </Text>
                </Link>
              </Grid>
            );
          })}
          <Grid xs={12}>
            <Text size={10} style={{ color: "#FFFFFF", marginTop: "10px" }}>
              lakings.com is the official Web site of the Los Angeles Kings. Los
              Angeles Kings is a trademark of Los Angeles Kings, LLC. NHL, the
              NHL Shield, the word mark and image of the Stanley Cup and NHL
              Conference logos are registered trademarks of the National Hockey
              League. All NHL logos and marks and NHL team logos and marks as
              well as all other proprietary materials depicted herein are the
              property of the NHL and the respective NHL teams and may not be
              reproduced without the prior written consent of NHL Enterprises,
              L.P. Copyright © 1999-2019 Los Angeles Kings, LLC and the National
              Hockey League. All Rights Reserved.
            </Text>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
    <Grid.Container
      alignItems="center"
      justify="space-between"
      wrap="nowrap"
      style={{ maxWidth: "1200px", margin: "40px auto 0" }}
    >
      <Grid xs={8} md={3}>
        <Image
          height={49}
          width={200}
          src="https://www-league.nhlstatic.com/images/logos/league-dark/133-com.svg"
          alt="Logo"
        />
      </Grid>
      <Grid md={9}>
        <Grid.Container alignItems="center" justify="flex-start">
          {bottomLinks.map(({ link, text }, index) => {
            return (
              <Grid
                style={{ padding: "0", margin: "0 20px 0 0" }}
                key={`top-${index}`}
              >
                <Link
                  href={link}
                  key={index}
                  style={{ padding: "0", margin: "0" }}
                >
                  <Text size={14} style={{ color: "#CCCCCC" }}>
                    {text}
                  </Text>
                </Link>
              </Grid>
            );
          })}
        </Grid.Container>
      </Grid>
    </Grid.Container>
  </>
);

export default Footer;
