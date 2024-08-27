"use client";

//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Background for layout
//-----------------------------------------------------------------------------

import { Box, alpha } from "@mui/material";

export default function Background(props: any) {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: "center",
    }} >
      <Box
        sx={{
          position: "fixed",
          width: '100%',
          backgroundImage: `linear-gradient(#211501, ${alpha('#202020', 0.0)})`,
          backgroundSize: '100% 40%',
          backgroundRepeat: 'no-repeat',
          height: '100dvh',
          zIndex: -1,
        }}
      />
      {props.children}
    </Box >
  );
}