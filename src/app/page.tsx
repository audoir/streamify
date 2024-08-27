"use client";

import { Button } from "@mui/material";
import CenterBox from "./components/CenterBox";

export default function Home() {
  const onClick = async () => {
    console.log(`Click clack`);
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