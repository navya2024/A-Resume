import React from "react";

import styled from "@emotion/styled";

import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import resume from "../../assets/resume.png";
import { useNavigate } from "react-router-dom";


function Header(props) {
  const href = props;
  const { window } = props;
  const { history } = props;
  const navigate = useNavigate();

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

  

  const Logo = styled("img")(() => ({
    width: "13rem",
    minWidth: "6rem",
  }));


  
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
      <AppBar elevation={0}
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
              <Button Link={item.href} key={item.title} sx={{ color: "#fff" }} onClick={()=> navigate(item.href)} >

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
