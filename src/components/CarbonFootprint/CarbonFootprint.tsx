import { Box, Typography, Button } from "@mui/material";
import theme from "../../theme/theme";
import purpleCloudImage from "../../assets/purple_cloud.png";
import whiteCloudImage from "../../assets/white_cloud.png";
import butterflyImage from "../../assets/butterfly.svg";
import leaf1Image from "../../assets/leaf1.svg";
import leaf2Image from "../../assets/leaft2.svg";
import styles from "./CarbonFootprint.module.css";

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
          className={styles.purpleCloud}
        />
        <img
          src={leaf1Image}
          alt="Leaf Icon Slim"
          className={styles.leafIconSlim}
        />
        <img
          src={leaf2Image}
          alt="Leaf Icon Wide"
          className={styles.leafIconWide}
        />

        <img
          src={leaf2Image}
          alt="Leaf Icon Wide"
          className={styles.leafIconWideBottom}
        />
        <img
          src={leaf1Image}
          alt="Leaf Icon Slim"
          className={styles.leafIconSlimBottom}
        />
        <img
          src={whiteCloudImage}
          alt="White Cloud"
          className={styles.whiteCloud}
        />
        <img
          src={butterflyImage}
          alt="Butterfly"
          className={styles.butterfly}
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
            <span className={styles.carbonEmissionsUnit}> kg</span>
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
            <span className={styles.buttonText}>Take a step</span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CarbonFootprint;
