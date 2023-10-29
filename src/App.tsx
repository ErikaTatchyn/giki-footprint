import CarbonFootprint from "./components/CarbonFootprint/CarbonFootprint";
import Estimation from "./components/Estimation/Estimation";
import formatNumberWithCommas from "./utils/formatNumberWithCommas";
import data from "./data/data.json";
import theme from "./theme/theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Target from "./components/Target/Target";

const App: React.FC = () => {
  const footprintValue: string = formatNumberWithCommas(data.footprint);
  const endOfYearTargetValue: string = formatNumberWithCommas(
    data.end_of_year_target
  );
  const leftToCutValue: string = formatNumberWithCommas(data.left_to_cut);
  const twentyThirtyTargetValue: string = formatNumberWithCommas(
    data.twenty_thirty_target
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          margin: "200px auto",
        }}
      >
        <CarbonFootprint footprintValue={footprintValue} />
        <Estimation
          endOfYearTarget={endOfYearTargetValue}
          leftToCut={leftToCutValue}
        />
        <Target twentyThirtyTarget={twentyThirtyTargetValue} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
