//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: App drawer
//-----------------------------------------------------------------------------

import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Theme, Toolbar, Typography, useTheme } from "@mui/material";
import { Dashboard } from "@mui/icons-material";
import { drawerWidth } from "@/lib/constants";

export default function NavDrawer() {
  return (
    <Box
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 }
      }}
      aria-label="navigation"
    >
      <Drawer
        variant="temporary"
        open={true}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box', width: drawerWidth
          },
        }}
      >
        <DrawerItems />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box', width: drawerWidth
          },
        }}
        open
      >
        <DrawerItems />
      </Drawer>
    </Box>
  );
}

const DrawerItems = () => {
  const theme: Theme = useTheme();

  return (
    <Box>
      <Toolbar disableGutters>
        <ListItem disablePadding >
          <ListItemButton >
            <ListItemIcon>
              <Avatar
                variant="square"
                src="/speedy.png"
                sx={{
                  width: 23,
                  height: 23,
                  ml: 0.1,
                }}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1">
                STREAMIFY
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding >
          <ListItemButton >
            <ListItemIcon>
              <Dashboard color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={"Dashboard"}
              primaryTypographyProps={{ style: { color: theme.palette.primary.main } }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box >
  );
}
