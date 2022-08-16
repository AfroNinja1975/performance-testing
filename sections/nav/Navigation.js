import Grid from "@mui/material/Grid";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

const Navigation = () => {
  return (
    <div
      className="bg-black w-full px-10 py-4 fixed top-0 left-0 z-10"
    >
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid item xs={8} md={4}>
          <NavLogo />
        </Grid>
        <Grid item>
          <NavLinks />
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
