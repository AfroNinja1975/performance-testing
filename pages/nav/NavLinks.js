import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

const NavLinks = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      spacing={1}
      justifyContent="flex-end"
      wrap="nowrap"
    >
      <Grid item>
        <Button
          id="tickets-button"
          aria-controls={open ? "tickets-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ backgroundColor: "#000000" }}
          variant="contained"
        >
          Tickets
        </Button>
        <Menu
          id="tickets-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "tickets-button",
          }}
        >
          <MenuItem onClick={handleClose}>Single Games</MenuItem>
          <MenuItem onClick={handleClose}>Season Tickets</MenuItem>
          <MenuItem onClick={handleClose}>Pre-season Tickets</MenuItem>
          <MenuItem onClick={handleClose}>Group Tickets</MenuItem>
          <MenuItem onClick={handleClose}>Theme Nights</MenuItem>
        </Menu>
      </Grid>
      <Grid item>
        <Button
          href="#"
          variant="contained"
          style={{ backgroundColor: "#000000" }}
        >
          Schedule
        </Button>
      </Grid>
      <Grid item>
        <Button
          href="#"
          variant="contained"
          style={{ backgroundColor: "#000000" }}
        >
          NHL Standings
        </Button>
      </Grid>
      <Grid item>
        <Button
          id="fans-button"
          aria-controls={open ? "fans-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ backgroundColor: "#000000" }}
          variant="contained"
        >
          Fans
        </Button>
        <Menu
          id="fans-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "fans-button",
          }}
        >
          <MenuItem onClick={handleClose}>LetsGoKings.com</MenuItem>
          <MenuItem onClick={handleClose}>Booster Club</MenuItem>
          <MenuItem onClick={handleClose}>Wallpapers</MenuItem>
        </Menu>
      </Grid>
      <Grid item>
        <Button
          href="#"
          variant="contained"
          style={{ backgroundColor: "#000000" }}
        >
          Shop
        </Button>
      </Grid>
    </Grid>
  );
}

export default NavLinks;
