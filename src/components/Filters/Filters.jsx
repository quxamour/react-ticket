import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import InputBase from "@mui/material/InputBase";
import { Box, Input, Slider, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./Filters.css"

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  positin: "absolute",
  width: "10%",
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignSelf: "center",
  // justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "18ch",
      },
    },
  },
}));

const Filters = ({ search, setSearch, price, setPrice }) => {
  return (
    <>
      <Container className="box_filter"
        style={{
          display: "flex",
          // justifyContent: "space-between",
          marginTop: "30px",
        }}>
          <Box>
        <Search className="search"
          style={{
            display: "flex",
            width: "400px",
            height: "42px",
            margin: "45px",
            paddingLeft: "15px",
            borderRadius: "50px",
            border: "2px solid blue",
            outline: "none",
            position: "relative",
            transition: ".3s linear",
          }}>
          <StyledInputBase
            value={search}
            style={{ color: "black" }}
            placeholder="Поиск событий"
            inputProps={{ "aria-label": "search" }}
            onChange={e => setSearch(e.target.value)}
          />
          <SearchIconWrapper>
            <ManageSearchIcon
              style={{
                width: "30px",
                height: "30px",
                border: "2px",

                position: "absolute",
                top: "5px",
                right: "7px",
              }}
            />
          </SearchIconWrapper>
        </Search>
        </Box>

        <Box className="filter"
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "3px solid blue",
            borderRadius: "10px",
            width: "660px",
            margin: "40px",
            padding: "10px",
          }}>
          <Typography variant="h7" marginTop="15px">
            Фильтровать по цене:
          </Typography>
          <Slider
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={(e, value) => setPrice(value)}
            valueLabelDisplay="auto"
            min={50}
            max={5000}
            step={50}
          />
          <TextField
            style={{ width: "90px" }}
            type="number"
            value={price[0]}
            label="От"
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />
          <TextField
            style={{ width: "100px", marginLeft: "10px", textAlign: "center" }}
            value={price[1]}
            type="number"
            label="До"
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />
        </Box>
      </Container>
      <Typography variant="h4" marginLeft="20px">
        События Бишкека для вас
      </Typography>
    </>
  );
};

export default Filters;
