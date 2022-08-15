import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const ShopCard = () => (
  <Grid
    item
    display="flex"
    justifyContent="flex-start"
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
          color="#FFCC33"
          style={{ lineHeight: 1 }}
        >
          New
        </Typography>
        <Typography
          variant="h6"
          px={3}
          pt={0}
          color="#000"
          style={{ fontWeight: "bold", lineHeight: 1.5 }}
        >
          LA Kings &quot;On the Ice&quot; Snapback Cap
        </Typography>
      </div>
      <CardMedia
        component="img"
        sx={{
          height: "100%",
          width: "100%",
        }}
        alt="Shopping image"
        src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4464000/ff_4464752-163e2be83c6e9b688e2e_full.jpg"
      />
      <div
        style={{
          display: "block",
          backgroundColor: "rgba(255,255,255,.7)",
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: "20px",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Grid container display="flex" alignItems="center">
          <Grid
            item
            xs={8}
            display="flex"
            alignItems="flex-start"
            style={{flexDirection: "column"}}
          >
            <Typography
              variant="h4"
              pb={0}
              color="#000"
              style={{ lineHeight: 1 }}
            >
              $29.99
            </Typography>
            <Typography
              variant="overline"
              color="#000"
              style={{ fontWeight: "bold", lineHeight: 1.5 }}
            >
              One Size Fits All
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Button variant="contained">Add to Cart</Button>
          </Grid>
        </Grid>
      </div>
    </Paper>
  </Grid>
);

export default ShopCard;
