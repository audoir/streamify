"use client";

//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Dashboard
//-----------------------------------------------------------------------------

import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
import CenterBox from "./components/CenterBox";
import { DashboardData } from "@/lib/shared/model";
import axios from "axios";
import { useDashboardStore } from "./store/dashboardStore";
import { useEffect, useState } from "react";

export default function Home() {
  const dashboardData: DashboardData | undefined = useDashboardStore(
    (state) => state.dashboardData);
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
    <CenterBox>
      {viewState === "loading" ? (
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
        <>
          <Typography>Hello</Typography>
        </>
      )}
    </CenterBox>
  );
}

type ViewStates = "default" | "loading" | "error";

const getDashboardData = async (): Promise<DashboardData | undefined> => {
  try {
    const rsp = await axios.post("api/get-dashboard-data",
      { authToken: "abc123" },
    );
    console.log(rsp.data);
    return rsp.data as DashboardData;
  } catch (e: any) {
    console.log(`Cannot get dashboard data: ${e}`);
  }
}