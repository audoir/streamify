//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Charts
//-----------------------------------------------------------------------------

import { DashboardData } from "@/lib/shared/model";
import { useDashboardStore } from "../store/dashboardStore";
import { desktopMaxWidth } from "@/lib/frontEnd/constants";
import { Grid, Paper, Typography } from "@mui/material";
import { LineChart, PieChart, BarChart } from "@mui/x-charts";

export default function Charts(props: any) {

  return (
    <Grid
      container
      spacing={2}
      sx={{
        px: { xs: 1 },
        maxWidth: desktopMaxWidth,
      }}
    >
      <UserGrowthChart />
      <RevenueDistribution />
      <MostStreamed />
    </Grid>
  );
}

function UserGrowthChart(props: any) {
  const dashboardData: DashboardData | undefined =
    useDashboardStore((state) => state.dashboardData);

  return (
    <Grid item xs={12} sm={6}>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          height: "100%",
        }}
      >
        <Typography variant="h6">User Growth Chart</Typography>
        <LineChart
          xAxis={[{
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            label: "Month",
          }]}
          yAxis={[{
            label: "Users"
          }]}
          series={[
            {
              data: dashboardData?.usersPastYear.map((item) => item.total),
              label: "Total"
            },
            {
              data: dashboardData?.usersPastYear.map((item) => item.active),
              label: "Active"
            },
          ]}
          height={300}
        />
      </Paper>
    </Grid>
  );
}

function RevenueDistribution(props: any) {
  const dashboardData: DashboardData | undefined =
    useDashboardStore((state) => state.dashboardData);

  return (
    <Grid item xs={12} sm={6}>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          height: "100%",
        }}
      >
        <Typography variant="h6">Revenue Distribution</Typography>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: dashboardData!.revenueDist.subscriptions, label: 'Subscriptions' },
                { id: 1, value: dashboardData!.revenueDist.ads, label: 'Ads' },
              ],
            },
          ]}
          height={200}
        />
      </Paper>
    </Grid>
  );
}

function MostStreamed(props: any) {
  const dashboardData: DashboardData | undefined =
    useDashboardStore((state) => state.dashboardData);

  return (
    <Grid item xs={12} sm={6}>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          height: "100%",
        }}
      >
        <Typography variant="h6">Top 5 Streamed Songs</Typography>
        <BarChart
          xAxis={[{ scaleType: 'band', data: dashboardData?.topStreamedSongs.map((item) => item.songName) }]}
          series={[{ data: dashboardData?.topStreamedSongs.map((item) => item.streamCount) }]}
          height={300}
        />
      </Paper>
    </Grid>
  );
}