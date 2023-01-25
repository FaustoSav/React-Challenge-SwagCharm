import React from "react";
import {
  AppBar,
  InputAdornment,
  makeStyles,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ height: "60px", padding:'0 30px' }}
      color="primary"
    >
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid item display={"flex"} flexDirection={"row"} gap={8}>
            <Typography variant="h6">SwagCharm</Typography>
            <TextField
              placeholder="Search products"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color={"primary"} />
                  </InputAdornment>
                ),
                disableUnderline: true,
                fullWidth: true,
              }}
              variant="standard"
            />
          </Grid>
          <Grid item display={"flex"} flexDirection={"row"} gap={2}>
            <Button
              sx={{
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                },
              }}
              variant="text"
              startIcon={<Person2OutlinedIcon />}
            >
              Sign in
            </Button>
            <Button
              sx={{
                ":hover": {
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                },
              }}
              variant="text"
              startIcon={<LocalMallOutlinedIcon />}
            >
              Cart
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
