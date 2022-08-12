import { CardMedia, Grid } from "@mui/material";
import Image from "./Image";

const Banner = ({image}) => {
  return (
    <Grid item display="flex" justifyContent="center" xs={12} my={5}>
      <CardMedia
        component="img"
        sx={{
          height: 121,
          width: 967,
        }}
        src={image}
        alt="Banner"
      />
    </Grid>
  );
}

export default Banner;
