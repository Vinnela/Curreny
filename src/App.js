import CurrencyInput from "./CurrencyInput";
import {useState, useEffect} from "react";
import axios from "axios";
import "./App.css"
function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('INR');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('https://open.er-api.com/v6/latest')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);
  function roundUp(number) {
    return number.toFixed(4);
  }

  function amount1Change(amount1) {
    setAmount2(roundUp(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function currency1Change(currency1) {
    setAmount2(roundUp(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function amount2Change(amount2) {
    setAmount1(roundUp(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function currency2Change(currency2) {
    setAmount1(roundUp(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }


  return (
    <section className="input-container">
    <div className="input-div">
      <main className="currency-converter-main">
      </main>
      <h1 className="currency-converter">Currency Converter</h1>
      <CurrencyInput
        onAmountChange={amount1Change}
        onCurrencyChange={currency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={amount2Change}
        onCurrencyChange={currency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2} />
              

    </div>
    </section>
  );
}

export default App;
