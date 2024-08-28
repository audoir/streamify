//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: App bar
//-----------------------------------------------------------------------------

import { AppBar, Box, CircularProgress, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon, Refresh } from "@mui/icons-material";
import { drawerWidth } from "@/lib/frontEnd/constants";
import { StyledIconButton } from "@/lib/frontEnd/streamifyTheme";
import { useDashboardStore } from "../store/dashboardStore";
import { useState } from "react";
import { DashboardData } from "@/lib/shared/model";
import { getDashboardData } from "@/lib/frontEnd/getDashboardData";

export default function NavAppBar() {
  const toggleDrawer: () => void = useDashboardStore(
    (state) => state.toggleDrawer);
  const updateDashboardData: (dashboardData_: DashboardData) => void =
    useDashboardStore((state) => state.updateDashboardData);

  const [viewState, setViewState] = useState<ViewStates>("default");

  const handleRefreshEvent = async () => {
    setViewState("loading");
    const dashboardData_: DashboardData | undefined =
      await getDashboardData();
    if (dashboardData_ !== undefined) {
      updateDashboardData(dashboardData_);
      setViewState("default");
    } else {
      setViewState("error");
    }
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        bgcolor: "#000000"
      }}
    >
      <Toolbar>
        <StyledIconButton
          sx={{
            mr: 2,
            display: { xs: "flex", sm: "flex", md: 'none' }
          }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </StyledIconButton>
        <Typography
          component="h1"
          variant="h6"
          color="secondary.light"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Streamify Analytics Dashboard
        </Typography>
        <Box>
          <StyledIconButton
            onClick={handleRefreshEvent}
            disabled={viewState === "loading"}
          >
            {viewState === "loading" ?
              <CircularProgress size={24} /> :
              <Refresh />}
          </StyledIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

type ViewStates = "default" | "loading" | "error";