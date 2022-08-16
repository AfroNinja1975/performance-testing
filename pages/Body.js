import Grid from "@mui/material/Grid";
import Banner from "./Banner";
import NewsCard from "./NewsCard";
import ShopCard from "./ShopCard";
import Other from "./Other";

export const Body = () => (
  <Grid
    container
    className="m-auto py-32"
    spacing={0}
    display="flex"
    alignItems="flex-start"
    justifyContent="center"
    wrap="wrap"
  >
    <Banner image="https://tpc.googlesyndication.com/simgad/13682594288002787745" />
    <NewsCard />
    <ShopCard />
    <Banner image="https://tpc.googlesyndication.com/simgad/8572446148985133851" />
    <Other />
  </Grid>
);

export default Body;
