//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Key Metrics
//-----------------------------------------------------------------------------

import { DashboardData } from "@/lib/shared/model";
import { useDashboardStore } from "../store/dashboardStore";
import { desktopMaxWidth } from "@/lib/frontEnd/constants";
import { Grid, Paper, Typography } from "@mui/material";
import { formatDollarAmount } from "@/lib/shared/utils";

export default function KeyMetrics(props: any) {
  const dashboardData: DashboardData | undefined =
    useDashboardStore((state) => state.dashboardData);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: { xs: 1 },
        maxWidth: desktopMaxWidth,
      }}
    >
      <GridItem title="Total Users" value={dashboardData!.totalUsers} />
      <GridItem title="Active Users" value={dashboardData!.activeUsers} />
      <GridItem title="Total Streams" value={dashboardData!.totalStreams} />
      <GridItem title="Revenue" value={formatDollarAmount(dashboardData!.revenue)} />
      <GridItem title="Top Artist" value={dashboardData!.topArtist} />
    </Grid>
  );
}

function GridItem(props: any) {
  return (
    <Grid item xs={12} sm={4}>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          height: "100%",
        }}
      >
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="h5">{props.value}</Typography>
      </Paper>
    </Grid>
  );
}