//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Dashboard Component
// Top level of dashboard
//-----------------------------------------------------------------------------

import { Box, Typography } from "@mui/material";
import KeyMetrics from "./KeyMetrics";

export default function Dashboard(props: any) {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
    }} >
      <Typography variant="h6" sx={{ m: 2 }}>
        Key Metrics
      </Typography>
      <KeyMetrics />
    </Box>
  );
}
