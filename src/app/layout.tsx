//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Layout for all pages
//-----------------------------------------------------------------------------

import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { streamifyTheme } from "@/lib/frontEnd/streamifyTheme";
import { CssBaseline } from "@mui/material";
import { Suspense } from "react";
import Background from "./components/Background";
import NavLayout from "./components/NavLayout";

export const metadata: Metadata = {
  title: "Streamify",
  description: "Streamify Analytics Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AppRouterCacheProvider>
          <ThemeProvider theme={streamifyTheme}>
            <CssBaseline />
            <Suspense>
              <Background>
                <NavLayout>
                  {children}
                </NavLayout>
              </Background>
            </Suspense>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
