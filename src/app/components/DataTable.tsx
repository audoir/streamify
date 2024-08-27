//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Data Table
//-----------------------------------------------------------------------------

import { DashboardData } from "@/lib/shared/model";
import { Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDashboardStore } from "../store/dashboardStore";

export default function DataTable(props: any) {
  const dashboardData: DashboardData | undefined =
    useDashboardStore((state) => state.dashboardData);

  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        height: "100%",
        m: 1,
      }}
    >
      <DataGrid
        columns={[
          { field: 'songName', headerName: 'Song Name', width: 150 },
          { field: 'artist', headerName: 'Artist', width: 150 },
          { field: 'date', headerName: 'Date', width: 150 },
          { field: 'streamCount', headerName: 'Stream Count', width: 150 },
          { field: 'userId', headerName: 'User Id', width: 150 },
        ]}
        rows={dashboardData?.recentStreams}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Paper>
  );
}