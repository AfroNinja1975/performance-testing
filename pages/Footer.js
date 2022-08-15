import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
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
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      wrap="nowrap"
      style={{ maxWidth: "1200px", margin: "auto" }}
    >
      <Grid item xs={8} md={3}>
        <CardMedia
          component="img"
          sx={{
            height: 167,
            width: 250,
          }}
          src="https://cms.nhl.bamgrid.com/images/assets/binary/308180580/binary-file/file.svg"
          alt="Logo"
        />
      </Grid>
      <Grid item md={9}>
        <Grid container display="flex" alignItems="center" justify="flex-start">
          {topLinks.map(({ link, text }, index) => {
            return (
              <Grid
                display="flex"
                item
                style={{ padding: "0", margin: "0 20px 5px 0" }}
                key={`top-${index}`}
              >
                <Link
                  href={link}
                  key={index}
                  underline="none"
                  style={{ padding: "0", margin: "0" }}
                >
                  <Typography variant="body" color="#CCC">
                    {text}
                  </Typography>
                </Link>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Typography
              variant="body2"
              style={{ color: "#FFFFFF", marginTop: "10px" }}
            >
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
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      wrap="nowrap"
      style={{ maxWidth: "1200px", margin: "30px auto 0" }}
    >
      <Grid item xs={8} md={3}>
        <CardMedia
          component="img"
          sx={{
            height: 49,
            width: 200,
          }}
          src="https://www-league.nhlstatic.com/images/logos/league-dark/133-com.svg"
          alt="NHL Logo"
        />
      </Grid>
      <Grid item md={9}>
        <Grid container display="flex" alignItems="center" justify="flex-start">
          {bottomLinks.map(({ link, text }, index) => {
            return (
              <Grid
                item
                style={{ padding: "0", margin: "0 20px 0 0" }}
                key={`top-${index}`}
              >
                <Link
                  href={link}
                  key={index}
                  underline="none"
                  style={{ padding: "0", margin: "0" }}
                >
                  <Typography variant="body2" color="#CCC">
                    {text}
                  </Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  </>
);

export default Footer;
