"use client";

//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Dashboard Page
// Make API request to get dashboard data, store, handle error
//-----------------------------------------------------------------------------

import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { DashboardData } from "@/lib/shared/model";
import { useDashboardStore } from "./store/dashboardStore";
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import { getDashboardData } from "@/lib/frontEnd/getDashboardData";

export default function Home() {
  const updateDashboardData: (dashboardData_: DashboardData) => void =
    useDashboardStore((state) => state.updateDashboardData);

  const [viewState, setViewState] = useState<ViewStates>("loading");

  useEffect(() => {
    const getDashboardData_ = async () => {
      const dashboardData_: DashboardData | undefined =
        await getDashboardData();
      if (dashboardData_ !== undefined) {
        updateDashboardData(dashboardData_);
        setViewState("default");
      } else {
        setViewState("error");
      }
    };
    getDashboardData_();
  }, []);

  return (
    <>
      {viewState === "loading" ? (
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: 2,
        }}>
          <Typography variant="h6" >
            Loading Dashboard Data...
          </Typography>
          <CircularProgress sx={{ mt: 2 }} />
        </Box>
      ) : viewState === "error" ? (
        <Alert severity="error">
          There was a problem getting dashboard data. Please reload the page.
        </Alert>
      ) : (
        <Dashboard />
      )}
    </>
  );
}

type ViewStates = "default" | "loading" | "error";