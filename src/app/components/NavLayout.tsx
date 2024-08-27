"use client";

//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Navigation layout
//-----------------------------------------------------------------------------

import { Box, Toolbar } from "@mui/material";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import NavAppBar from "./NavAppBar";
import NavDrawer from "./NavDrawer";

export default function NavLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router: AppRouterInstance = useRouter();

  return (
    <>
      <NavAppBar />
      <NavDrawer />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }} >
        <Toolbar />
        <Suspense>
          {children}
        </Suspense>
      </Box>
    </>
  );
}