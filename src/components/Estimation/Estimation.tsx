import React from "react";
import { Box, Typography } from "@mui/material";

interface EstimationInfoProps {
  endOfYearTarget: string;
  leftToCut: string;
}

const EstimationInfo: React.FC<EstimationInfoProps> = ({
  endOfYearTarget,
  leftToCut,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      gap="24px"
      data-testid="estimation"
    >
      <Box sx={{ width: "8.125rem", textAlign: "center" }}>
        <Typography
          color="secondary"
          sx={{
            fontSize: "0.875rem",
            lineHeight: "150%",
            fontWeight: 700,
          }}
        >
          End of
        </Typography>
        <Typography
          color="secondary"
          sx={{
            fontSize: "0.875rem",
            lineHeight: "150%",
            fontWeight: 700,
          }}
        >
          year target
        </Typography>
        <Typography
          color="primary"
          sx={{
            fontSize: "1.875rem",
            fontWeight: 700,
            lineHeight: "150%",
          }}
        >
          {endOfYearTarget}
          <span
            style={{
              fontSize: "0.875rem",
              lineHeight: "150%",
              fontWeight: 700,
            }}
          >
            {" "}
            kg
          </span>
        </Typography>
        <Typography
          color="primary"
          sx={{
            fontSize: "0.75rem",
            fontWeight: 600,
            lineHeight: "150%",
          }}
        >
          of carbon emissions
        </Typography>
      </Box>
      <Box sx={{ width: "8.125rem", textAlign: "center" }}>
        <Typography
          color="secondary"
          sx={{
            fontSize: "0.875rem",
            lineHeight: "150%",
            fontWeight: 700,
            px: 3,
          }}
        >
          Left to cut this year
        </Typography>
        <Typography
          color="primary"
          sx={{
            fontSize: "1.875rem",
            fontWeight: 700,
            lineHeight: "150%",
          }}
        >
          {leftToCut}
          <span
            style={{
              fontSize: "0.875rem",
              lineHeight: "150%",
              fontWeight: 700,
            }}
          >
            {" "}
            kg
          </span>
        </Typography>
        <Typography
          color="primary"
          sx={{
            fontSize: "0.75rem",
            fontWeight: 600,
            lineHeight: "150%",
          }}
        >
          of carbon emissions
        </Typography>
      </Box>
    </Box>
  );
};

export default EstimationInfo;
