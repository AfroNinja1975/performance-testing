import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { Image } from "mui-image";

export const NewsCard = () => (
  <Grid
    item
    display="flex"
    alignItems="flex-start"
    xs={12}
    md={6}
    style={{
      alignSelf: "stretch",
      paddingLeft: "10px",
      paddingRight: "10px",
      boxSizing: "border-box",
      flexDirection: "column",
    }}
  >
    <Typography variant="h5" mb={1}>
      Featured Product
    </Typography>
    <Paper
      elevation={3}
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <Typography
          variant="overline"
          px={3}
          pt={2}
          pb={0}
          color="#BBB"
          style={{ lineHeight: 1 }}
        >
          Breaking Story
        </Typography>
        <Typography
          variant="h6"
          px={3}
          pt={0}
          color="#FFF"
          style={{ fontWeight: "bold", lineHeight: 1.5 }}
        >
          Dustin Brown to retire
        </Typography>
      </div>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
        }}
        src="https://cdn.vox-cdn.com/thumbor/7Dakrrzay6RgNFh1EsH5j370tqY=/0x0:4000x2667/1200x800/filters:focal(1680x1014:2320x1654)/cdn.vox-cdn.com/uploads/chorus_image/image/65483999/1180921065.jpg.0.jpg"
        style={{ marginBottom: "1em" }}
      />
      <Typography variant="body" px={3} pb={2}>
        Kings to Retire Dustin Brown&lsquo;s No. 23 and Unveil Statue
      </Typography>
      <Typography variant="body2" px={3} pb={3} color="#888">
        Ceremony to Honor Two-Time Stanley Cup Captain and Franchise Icon Set
        for Feb. 11 at Crypto.com Arena
      </Typography>
    </Paper>
  </Grid>
);

export default NewsCard;
