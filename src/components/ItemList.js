import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Dummy data similar to the screenshot
    const dummyData = [
      {
        id: 1,
        scanName: "ITsecgames active scanning from VM",
        targetUrl: "http://www.itsecgames.com/",
        scanEngine: "Engine - Jan 10",
        status: "Completed",
        riskScore: "B",
        totalVulnerabilities: 212,
        severity: { low: 30, medium: 78, high: 99, critical: 5 },
      },
      {
        id: 2,
        scanName: "Dcirius scanning from VM",
        targetUrl: "https://dcirrus.io",
        scanEngine: "tanishq doing testing ( wow)",
        status: "Completed",
        riskScore: "B",
        totalVulnerabilities: 212,
        severity: { low: 30, medium: 78, high: 99, critical: 5 },
      },
      {
        id: 3,
        scanName: "BWAPP recon Scan from VM",
        targetUrl: "http://www.itsecgames.com/",
        scanEngine: "tanishq doing testing ( wow)",
        status: "Completed",
        riskScore: "B",
        totalVulnerabilities: 212,
        severity: { low: 30, medium: 78, high: 99, critical: 5 },
      },
      // Add more rows as needed...
    ];
    setItems(dummyData);
  }, []);

  const handleRowClick = (params) => {
    const itemId = params.id;
    sessionStorage.setItem("item_id", itemId); // Store itemId in sessionStorage
    navigate("/list/details"); // Navigate to details page
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "scanName", headerName: "Scan Name", width: 250 },
    { field: "targetUrl", headerName: "Target URL", width: 200 },
    { field: "scanEngine", headerName: "Scan Engine", width: 250 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "riskScore", headerName: "Risk Score", width: 100 },
    {
      field: "totalVulnerabilities",
      headerName: "Total Vulnerabilities",
      width: 200,
    },
    {
      field: "severity",
      headerName: "Severity",
      width: 200,
      renderCell: (params) => (
        <div>
          <span>
            Critical: {params.value.critical}, High: {params.value.high},
            Medium: {params.value.medium}, Low: {params.value.low}
          </span>
        </div>
      ),
    },
  ];

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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={items}
          columns={columns}
          pageSize={5}
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default ItemList;
