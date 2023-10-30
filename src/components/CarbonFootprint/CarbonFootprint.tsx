import { Box, Typography, Button } from "@mui/material";
import theme from "../../theme/theme";
import purpleCloudImage from "../../assets/purple_cloud.png";
import whiteCloudImage from "../../assets/white_cloud.png";
import butterflyImage from "../../assets/butterfly.svg";
import leaf1Image from "../../assets/leaf1.svg";
import leaf2Image from "../../assets/leaft2.svg";

interface CarbonFootprintProps {
  footprintValue: string;
}

const CarbonFootprint: React.FC<CarbonFootprintProps> = ({
  footprintValue,
}) => {
  return (
    <Box height={138} data-testid="carbon-footprint">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "368px",
          height: "auto",
          position: "relative",
        }}
      >
        <img
          src={purpleCloudImage}
          alt="Purple Cloud"
          style={{
            height: "auto",
            position: "absolute",
            width: "100%",
            zIndex: 1,
          }}
        />
        <img
          src={leaf1Image}
          alt="Leaf Icon Slim"
          style={{
            position: "absolute",
            width: "57px",
            height: "auto",
            zIndex: 2,
            top: -108,
            right: 41,
          }}
        />
        <img
          src={leaf2Image}
          alt="Leaf Icon Wide"
          style={{
            position: "absolute",
            width: 86,
            height: "auto",
            zIndex: 2,
            top: 78,
            right: 272,
            transform: "rotate(180deg)",
          }}
        />

        <img
          src={leaf2Image}
          alt="Leaf Icon Wide"
          style={{
            position: "absolute",
            width: "79px",
            height: "auto",
            zIndex: 2,
            top: -74,
            left: 280,
          }}
        />
        <img
          src={leaf1Image}
          alt="Leaf Icon Slim"
          style={{
            position: "absolute",
            width: "57px",
            height: "auto",
            zIndex: 2,
            top: 90,
            left: 46,
            transform: "rotate(180deg)",
          }}
        />
        <img
          src={whiteCloudImage}
          alt="White Cloud"
          style={{
            height: "auto",
            position: "absolute",
            width: "87%",
            zIndex: 3,
          }}
        />
        <img
          src={butterflyImage}
          alt="Butterfly"
          style={{
            position: "absolute",
            top: "-85px",
            left: "23px",
            width: "67px",
            height: "55px",
            zIndex: 4,
          }}
        />
        <Box
          sx={{ position: "absolute", textAlign: "center", zIndex: 5, mt: 3 }}
        >
          <Typography
            color="secondary"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 700,
              lineHeight: "150%",
            }}
          >
            Your footprint
          </Typography>
          <Typography
            sx={{
              fontSize: "2.375rem",
              color: "rgb(95, 43, 104)",
              fontWeight: 700,
            }}
          >
            {footprintValue}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              {" "}
              kg
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "0.875rem",
              lineHeight: "150%",
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            of carbon emissions
          </Typography>

          <Button
            sx={{
              py: 1,
              px: 2,
              mt: 1,
              mx: "auto",
              borderRadius: 100,
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          >
            <span
              style={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Take a step
            </span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CarbonFootprint;
