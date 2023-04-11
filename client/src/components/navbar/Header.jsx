import React from "react";

import styled from "@emotion/styled";

import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import resume from "../../assets/resume.png";


function Header(props) {
  const href = props;
  const { window } = props;
  const { history } = props;

  //const navItems = ["Resumes", "Categories", "About" , "Contact", "Login"];
  const navItems = [
    {
      title: "Home",
      href: "/",
      
    },
    {
      title: "Resumes",
      href: "/resumes",
      
    },
    {
      title: "Categories",
      href: "/categories",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };


  const Logo = styled("img")(() => ({
    width: "13rem",
    minWidth: "6rem",
  }));


  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
      <AppBar
        component="nav"
        color="secondary"
        position="static"
        sx={{ background: (theme) => theme.palette.gradient.main  }}
      >
        <Toolbar>
          <Logo src={resume} />
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button href={item.href} key={item.title} sx={{ color: "#fff" }} onClick={()=> handleButtonClick(href)} >

                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}

export default Header;
