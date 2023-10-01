import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CarValueCalculator from "./components/CarValueCalculator";
import RiskRatingCalculator from "./components/RiskRatingCalculator";
import FinalQuoteCalculator from "./components/FinalQuoteCalculator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car_value" element={<CarValueCalculator />} />
        <Route path="/risk_rating" element={<RiskRatingCalculator />} />
        <Route path="/final_quote" element={<FinalQuoteCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
