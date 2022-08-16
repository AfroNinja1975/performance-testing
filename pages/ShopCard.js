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
    className="px-3 flex-col h-full items-stretch"
  >
    <Typography variant="h5" mb={1}>
      Featured Product
    </Typography>
    <Paper elevation={3} className="w-full h-full overflow-hidden relative">
      <div className="flex-col absolute top-0 left-0 z-1 px-5 pt-3">
        <Typography
          variant="overline"
          color="#FFCC33"
          style={{ lineHeight: 1 }}
        >
          New
        </Typography>
        <Typography
          variant="h6"
          color="#000"
          className="font-bold"
          style={{ lineHeight: 1.5 }}
        >
          LA Kings &quot;On the Ice&quot; Snapback Cap
        </Typography>
      </div>
      <CardMedia
        component="img"
        className="w-full m-auto"
        sx={{
          height: "100%",
          width: "100%",
          maxWidth: "425px",
          maxHeight: "425px",
        }}
        alt="Shopping image"
        src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4464000/ff_4464752-163e2be83c6e9b688e2e_full.jpg"
      />
      <div className="absolute bottom-0 left-0 w-full p-3 z-1 bg-gray-100">
        <Grid container display="flex" alignItems="center">
          <Grid
            className="flex-col"
            item
            xs={8}
            display="flex"
            alignItems="flex-start"
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
              className="font-bold"
              variant="overline"
              color="#000"
              style={{ lineHeight: 1.5 }}
            >
              One Size Fits All
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Button variant="contained" className="bg-blue-500">
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </div>
    </Paper>
  </Grid>
);

export default ShopCard;
