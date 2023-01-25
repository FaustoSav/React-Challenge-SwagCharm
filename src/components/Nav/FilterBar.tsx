import {
  AppBar,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import { ThemePalette } from "../../themeConfig";
export const FilterBar = () => {
  const filterArray = [
    "All products",
    "Packaging",
    "Drinkware",
    "Apparel",
    "Notebooks",
    "Backpacks",
  ];
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ width: "100%", marginBottom: "100px", marginTop: "60px" }}
      color="secondary"
    >
      <Toolbar>
        <Grid container gap={4} sx={{padding:'0 20px'}}>
          {filterArray.map((item: string) => {
            return (
              <Grid item>
                <Button
                  sx={{
                    ":hover": {
                      textDecoration: "underline",
                      background:'transparent'
                    },
                  }}
                  variant="text"
                >
                  <Typography
                    variant="body2"
                    color={ThemePalette.fontGrey}
                    sx={{
                      ":hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                       
                      },
                    }}
                  >
                    {item}
                  </Typography>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
