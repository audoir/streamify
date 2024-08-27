//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: App bar
//-----------------------------------------------------------------------------

import { AppBar, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { drawerWidth } from "@/lib/constants";
import { StyledIconButton } from "@/lib/streamifyTheme";

export default function NavAppBar() {
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
          }
          }
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
      </Toolbar>
    </AppBar>
  );
}
