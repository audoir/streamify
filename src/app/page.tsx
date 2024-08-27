"use client";

//-----------------------------------------------------------------------------
// Author: Wayne Cheng
// Description: Dashboard
//-----------------------------------------------------------------------------

import { Button } from "@mui/material";
import CenterBox from "./components/CenterBox";
import { DashboardData } from "@/lib/shared/model";
import axios from "axios";

export default function Home() {
  const onClick = async () => {
    const rsp: DashboardData | undefined = await getDashboardData();
    console.log(rsp);
  };

  return (
    <CenterBox>
      <>
        <Button variant="contained" onClick={onClick}>
          API Call
        </Button>
      </>
    </CenterBox>
  );
}

const getDashboardData = async (): Promise<DashboardData | undefined> => {
  try {
    const rsp = await axios.post("api/get-dashboard-data",
      { authToken: "abc123" },
    );
    console.log(rsp.data);
    return rsp.data as DashboardData;
  } catch (e: any) {
    console.log(`Cannot get dashboard data: ${e}`);
  }
}