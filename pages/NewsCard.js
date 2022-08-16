import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const NewsCard = () => (
  <Grid
    item
    display="flex"
    alignItems="flex-start"
    xs={12}
    md={6}
    className="px-3 flex-col h-full items-stretch"
  >
    <Typography variant="h5" mb={1}>
      Top Story
    </Typography>
    <Paper elevation={3} className="w-full h-full overflow-hidden relative">
      <div className="flex-col absolute top-0 left-0 z-1 px-5 pt-3">
        <Typography color="#BBB" variant="overline" style={{ lineHeight: 1 }}>
          Breaking Story
        </Typography>
        <Typography
          className="font-bold"
          variant="h6"
          color="#FFF"
          style={{ lineHeight: 1.5 }}
        >
          Dustin Brown to retire
        </Typography>
      </div>
      <CardMedia
        component="img"
        className="mb-3"
        src="https://cdn.vox-cdn.com/thumbor/7Dakrrzay6RgNFh1EsH5j370tqY=/0x0:4000x2667/1200x800/filters:focal(1680x1014:2320x1654)/cdn.vox-cdn.com/uploads/chorus_image/image/65483999/1180921065.jpg.0.jpg"
        style={{ width: "100%" }}
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
