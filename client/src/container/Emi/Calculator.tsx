import { useState } from "react";
import "./style.scss";
import Layout from "../../Layout/Layout";

function Calculator() {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState("");

  const calculateEMI = () => {
    const principalAmount = parseFloat(principal);
    const rateOfInterest = parseFloat(interestRate) / 100 / 12;
    const loanTenure = parseFloat(tenure) * 12;
    const emiValue =
      (principalAmount *
        rateOfInterest *
        Math.pow(1 + rateOfInterest, loanTenure)) /
      (Math.pow(1 + rateOfInterest, loanTenure) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <Layout>
      <div className="App">
        <h1>EMI Calculator</h1>
        <div>
          <label>Principal Amount :</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div>
          <label>Interest Rate (% per annum):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div>
          <label>Loan Tenure (years):</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </div>
        <button onClick={calculateEMI}>Calculate EMI</button>
        {emi && <div className="result">EMI: ₹{emi}</div>}
      </div>
    </Layout>
  );
}

export default Calculator;
