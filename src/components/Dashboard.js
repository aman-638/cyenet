import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Navbar from "./Navbar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleTabChange = (event, newValue) => {
    if (newValue === "dashboard") {
      navigate("/dashboard");
    } else if (newValue === "list") {
      navigate("/list");
    }
  };

  return (
    <div>
      <Navbar activeTab="dashboard" handleTabChange={handleTabChange} />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* Total Vulnerabilities */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Total Vulnerabilities</Typography>
              <Typography variant="h4">213</Typography>
            </Paper>
          </Grid>
          {/* Critical */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2, bgcolor: "red.500" }}>
              <Typography variant="h6">Critical</Typography>
              <Typography variant="h4">6</Typography>
            </Paper>
          </Grid>
          {/* High */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2, bgcolor: "orange.500" }}>
              <Typography variant="h6">High</Typography>
              <Typography variant="h4">78</Typography>
            </Paper>
          </Grid>
          {/* Medium */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2, bgcolor: "yellow.500" }}>
              <Typography variant="h6">Medium</Typography>
              <Typography variant="h4">99</Typography>
            </Paper>
          </Grid>
          {/* Low */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2, bgcolor: "green.500" }}>
              <Typography variant="h6">Low</Typography>
              <Typography variant="h4">30</Typography>
            </Paper>
          </Grid>
          {/* Risk Score */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Risk Score</Typography>
              <Typography variant="h4">5.2</Typography>
            </Paper>
          </Grid>
          {/* Additional Widgets */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Top Vulnerabilities</Typography>
              {/* Additional content can go here */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
