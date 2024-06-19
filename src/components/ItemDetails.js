import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { CircularProgress, Box, Paper, Typography, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, selectItem } from "../redux/itemSlice";

const ItemDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.item.loading);
  const selectedItem = useSelector((state) => state.item.selectedItem);

  useEffect(() => {
    const previousItem = JSON.parse(sessionStorage.getItem("previousItem"));
    if (previousItem && selectedItem?.id === previousItem?.id) {
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
    }
  }, [selectedItem, dispatch]);

  const handleTabChange = (event, newValue) => {
    if (newValue === "dashboard") {
      navigate("/dashboard");
    } else if (newValue === "list") {
      navigate("/list");
    }
  };

  return (
    <div>
      <Navbar activeTab="list" handleTabChange={handleTabChange} />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : selectedItem ? (
        <Box sx={{ padding: 3 }}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
              {selectedItem.scanName}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Target URL:</strong> {selectedItem.targetUrl}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Scan Engine:</strong> {selectedItem.scanEngine}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Status:</strong> {selectedItem.status}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Risk Score:</strong> {selectedItem.riskScore}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Total Vulnerabilities:</strong>{" "}
                  {selectedItem.totalVulnerabilities}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Severity:</strong> Critical:{" "}
                  {selectedItem.severity.critical}, High:{" "}
                  {selectedItem.severity.high}, Medium:{" "}
                  {selectedItem.severity.medium}, Low:{" "}
                  {selectedItem.severity.low}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ) : (
        <Box sx={{ padding: 3 }}>
          <Typography variant="h6" color="error">
            No item selected
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default ItemDetails;
