//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Dashboard Store
//-----------------------------------------------------------------------------

import { DashboardData } from '@/lib/shared/model';
import { create } from 'zustand';

interface DashboardState {
  drawerOpen: boolean
  dashboardData?: DashboardData
  toggleDrawer: () => void
  updateDashboardData: (dashboardData_: DashboardData) => void
}

export const useDashboardStore = create<DashboardState>()((set) => ({
  drawerOpen: false,
  toggleDrawer: () => set((state) => ({
    drawerOpen: !state.drawerOpen
  })),
  updateDashboardData: (dashboardData_: DashboardData) => set({
    dashboardData: dashboardData_
  }),
}));