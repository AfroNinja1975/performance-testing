import { Grid, Paper } from "@mui/material";
import OtherCards from "./OtherCards";

export const cardList = [
  {
    image:
      "https://cms.nhl.bamgrid.com/images/photos/335101762/1704x960/cut.jpg",
    heading: "Join the LA Kings birthday Club!",
    text:
      "On your birthday, you'll receive:Two (2) complimentary tickets*, Up to 25% off additional tickets you purchase, 10% off at TEAM LA online",
    link: "https://www.nhl.com/kings/fans/birthday",
  },
  {
    image:
      "https://cms.nhl.bamgrid.com/images/photos/335101428/1136x640/cut.jpg",
    heading: "LA Kings 5K In Redondo Breach",
    text:
      "The 5K is set to take place on September 10th at 8:00am and will be held in the beautiful Riviera Village area of South Redondo Beach.",
    link: "https://runsignup.com/Race/CA/RedondoBeach/LAKings5KinRedondoBeach",
  },
];

export const Other = () => (
  <Paper
    elevation={3}
    style={{ padding: "10px 30px", boxSizing: "border-box" }}
  >
    <Grid container display="flex" direction="column">
      {cardList.map(({ image, heading, link, text }, index) => (
        <Grid item style={{ margin: "5px 0" }} key={index}>
          <OtherCards
            image={image}
            heading={heading}
            link={link}
            text={text}
            key={index}
          />
        </Grid>
      ))}
    </Grid>
  </Paper>
);

export default Other;
