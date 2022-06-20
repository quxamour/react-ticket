import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Table } from "@mui/material";
import { Badge } from "@mui/material";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Header = () => {
  // const { count } = React.useContext(cartContext);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar className="appbar" position="fixed">
      <Container
        className="appbar"
        maxWidth="xl"
        // style={{ backgroundColor: "purp" }}
      >
        <Toolbar>
          <img className="logo"
            style={{ marginRight: "30px", cursor: "pointer" }}
            src={"https://ticket.kg/images/logo.svg"}
            alt="logo"
            onClick={() => navigate("/")}
          />

          <Box className="box_header"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0 20px 0 20px",
            }}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button className="btn_hd"
              onClick={() => navigate("/events")}
              sx={{
                my: 2,
                color: "black",
                // backgroundColor: "steelblue",
                display: "block",
              }}>
              Все события
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                // backgroundColor: "steelblue",
                display: "block",
              }}>
              Кассы
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                // backgroundColor: "steelblue",
                display: "block",
              }}>
              Язык
            </Button>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => navigate("/cart")}>
              <Badge /*badgeContent={count}*/ color="error">
                <AddShoppingCartIcon className="icon" />
              </Badge>
            </IconButton>

            <Link to="/login">
              <Button className="btn_log-in" sx={{
                  my: 2,
                  color: "black",
                  backgroundColor: "white",
                  display: "block",
                  textDecoration: "none"
                }} variant="contained">Войти</Button>
            </Link>
          </Box>
          
          <div className="menu_icon">
            {/* <MenuIcon className="menu_icon"/> */}
          </div>

          {/* <nav className="menu_body">
            <MenuIcon />
            <span className="menu_arrow"></span>
            <ul className="menu_sub-list">
            <li>
              <a href="" className="menu_sub-link">Все события</a>
            </li>
            <li>
              <a href="" className="menu_sub-link">Кассы</a>
            </li>
            <li>
              <a href="" className="menu_sub-link">Язык</a>
            </li>
            <li>
              <a href="" className="menu_sub-link">Войти</a>
            </li>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => navigate("/cart")}>
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          </ul>
          </nav> */}


        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
