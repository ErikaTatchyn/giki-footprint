import { Box, Typography } from "@mui/material";

interface TargetProps {
  twentyThirtyTarget: string;
}

const Target: React.FC<TargetProps> = ({ twentyThirtyTarget }) => {
  return (
    <Box
      data-testid="target"
      sx={{
        bgcolor: "#ebd7ee",
        p: 1,
        mx: "auto",
        borderRadius: 100,
        fontWeight: "bold",
        textAlign: "center",
        width: 245,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        color="primary"
        data-testid="custom-element"
        sx={{
          fontWeight: 700,
          lineHeight: "150%",
          fontSize: "0.875rem",
        }}
      >
        Your 2030 target is {twentyThirtyTarget} kg
      </Typography>
    </Box>
  );
};

export default Target;
