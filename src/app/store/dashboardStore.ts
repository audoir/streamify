//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Dashboard Store
//-----------------------------------------------------------------------------

import { create } from 'zustand';

interface DashboardState {
  drawerOpen: boolean
  toggleDrawer: () => void
}

export const useDashboardStore = create<DashboardState>()((set) => ({
  drawerOpen: false,
  toggleDrawer: () => set((state) => ({
    drawerOpen: !state.drawerOpen
  })),
}));