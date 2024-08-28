//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Makes API request to get dashboard data
//-----------------------------------------------------------------------------

import axios from "axios";
import { DashboardData } from "../shared/model";

export const getDashboardData = async (): Promise<DashboardData | undefined> => {
  try {
    const rsp = await axios.post("api/get-dashboard-data",
      { authToken: "abc123" }
    );
    // console.log(rsp.data);
    return rsp.data as DashboardData;
  } catch (e: any) {
    console.log(`Cannot get dashboard data: ${e}`);
  }
};
