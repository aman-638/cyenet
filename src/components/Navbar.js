import React from "react";
import { AppBar, Toolbar, Typography, Button, Tabs, Tab } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = ({ activeTab, handleTabChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CyNET
        </Typography>
        <Button
          color="inherit"
          onClick={handleLogout}
          startIcon={<ExitToAppIcon />}
        >
          Logout
        </Button>
      </Toolbar>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="secondary"
        centered
      >
        <Tab label="Home" value="dashboard" />
        <Tab label="List" value="list" />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
