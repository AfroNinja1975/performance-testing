import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const NavLogo = () => {
  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      spacing={0}
      justify="flex-start"
      wrap="nowrap"
    >
      <Grid item xs={4} md={1}>
        <CardMedia
          component="img"
          sx={{
            height: 45,
            width: 67,
          }}
          alt="Logo"
          src="https://cms.nhl.bamgrid.com/images/assets/binary/308180580/binary-file/file.svg"
        />
      </Grid>
      <Grid item xs={8} md={11}>
        <CardMedia
          component="img"
          sx={{
            height: 23,
            width: 125,
          }}
          alt="Logo text"
          src="https://cms.nhl.bamgrid.com/images/photos/321078680/300x56/cut.png"
        />
      </Grid>
    </Grid>
  );
}

export default NavLogo;
