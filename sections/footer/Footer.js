import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

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
  <div className="bg-gray-700 w-full py-8">
    <Grid
      container
      className="max-w-screen-xl m-auto"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      wrap="nowrap"
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
              color="#FFF"
              variant="body2"
              className="mt-4"
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
      className="max-w-screen-xl mx-auto mt-3"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      wrap="nowrap"
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
                className="p-0 mr-4"
                key={`top-${index}`}
              >
                <Link
                  className="p-0"
                  href={link}
                  key={index}
                  underline="none"
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
  </div>
);

export default Footer;
