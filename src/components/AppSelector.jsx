import React , { useState } from "react";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import styles from '@styles/AppSelector.module.scss';


const currencyPairs = [
  "EUR/USD",
  "USD/JPY",
  "GBP/USD",
  "AUD/USD",
  "USD/CHF",
  "NZD/USD",
  "USD/CAD",
  "EUR/JPY",
  "EUR/GBP",
  "EUR/CHF",
  // add more currency pairs here...
];

const timeFrames = ["Monthly", "Weekly", "Daily", "Hourly"];

function AppSelector() {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [timeFrameValues, setTimeFrameValues] = useState({
    Monthly: "",
    Weekly: "",
    Daily: "",
    Hourly: "",
  });

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleTimeFrameChange = (e) => {
    const { name, value } = e.target;
    setTimeFrameValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const getTrendColor = () => {
    const colors = Object.values(timeFrameValues);
    const greenCount = colors.filter((c) => c === "green").length;
    const yellowCount = colors.filter((c) => c === "yellow").length;
    const redCount = colors.filter((c) => c === "red").length;

    if (greenCount >= 3) {
      return "long";
    } else if (yellowCount >= 2) {
      return "neutral";
    } else if (redCount == 2) {
      return "neutral";
      
    }else if (greenCount == 2) {
      return "neutral";
      
    }
      else if (redCount >= 3) {
      return "short";
    } else {
      return "";
    }
  };
  //save local
  const handleScreenshotSave = (currency, trend) => {
    if (!selectedCurrency) {
      return;
    }
    
    // Get the current date
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '-');
  
    // Use html2canvas to convert the window into an image
    html2canvas(document.body).then(function (canvas) {
      // Use FileSaver.js to save the image as a file on the user's computer
      canvas.toBlob(function (blob) {
        const fileName = `${currency}_${trend}_${date}.jpg`;
        saveAs(blob, fileName);
      }, 'image/jpeg');
    });
  };

  
  
  return (
    <>
    
    <div className={styles.appcontainer}>
  
  <label className={styles.selectCurrency} htmlFor="currency">Select currency pair:</label>
  <select className={styles.currencySelect} id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
    <option value="">--Select Currency--</option>
    {currencyPairs.map((pair) => (
      <option key={pair} value={pair}>
        {pair}
      </option>
    ))}
  </select>
  {selectedCurrency && (
    <div>
      {timeFrames.map((timeFrame) => (
        <div key={timeFrame}>
          <label className={styles.timeFrameLabel} htmlFor={timeFrame}>{timeFrame}:</label>
          <select className={styles.timeFrameSelect} id={timeFrame} name={timeFrame} value={timeFrameValues[timeFrame]} onChange={handleTimeFrameChange}>
            <option value="">--Select Color--</option>
            <option value="green" style={{ color: "green" }}>Long</option>
            <option value="orange" style={{ color: "orange" }}>Neutral</option>
            <option value="red" style={{ color: "red" }}>Short</option>
          </select>
        </div>
      ))}
      <div className={styles.selectedCurrency}>{selectedCurrency}</div>
      <div className={`${styles.trendSquare} ${getTrendColor()}`}>
        {getTrendColor() ? `${getTrendColor().toUpperCase()} TREND` : "No Trend Selected"}
      </div>
      <button className={styles.saveScreenshotBtn} onClick={() => handleScreenshotSave(selectedCurrency, getTrendColor())}>Save Screenshot</button>
      
    </div>
  )}
</div>
</>
  );
}

export default AppSelector;