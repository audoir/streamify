import { desktopCenterMaxWidth } from "@/lib/frontEnd/constants";
import { Box } from "@mui/material";

export default function CenterBox({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: desktopCenterMaxWidth,
        minHeight: "70dvh",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}