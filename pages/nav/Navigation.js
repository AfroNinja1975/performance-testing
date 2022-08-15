import Grid from "@mui/material/Grid";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

const Navigation = () => {
  return (
    <div style={{ backgroundColor: "#000000", padding: "10px 40px", position: 'fixed', top: 0, width: '100%', zIndex: '100' }}>
      <Grid container display="flex" alignItems="center" justifyContent="space-between" wrap="nowrap">
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
