import { CardMedia, Grid, Link, Typography } from "@mui/material";
import Image from "./Image";

export const OtherCards = ({ image, heading, link, text }) => (
  <Grid
    container
    alignItems="center"
    displey="flex"
    wrap="nowrap"
    style={{ margin: "10px 0" }}
  >
    <Grid item xs={4} md={3}>
      <CardMedia
        component="img"
        sx={{
          height: 113,
          width: 200,
        }}
        alt="Articles image"
        src={image}
      />
    </Grid>
    <Grid item pl={1} xs={8} md={9}>
      <Link href={link} underline="none">
        <Typography
          variant="body"
          style={{ display: "block", fontWeight: "bold" }}
          color="#000"
        >
          {heading}
        </Typography>
        <Typography variant="body2" color="#777">
          {text}
        </Typography>
      </Link>
    </Grid>
  </Grid>
);

export default OtherCards;
