import React, { useState } from "react";
import AppSelector from "./AppSelector";
import styles from "../styles/AppContainer.module.scss"

const AppContainer = () => {
  const [selectedCurrency1, setSelectedCurrency1] = useState("");
  const [timeFrameValues1, setTimeFrameValues1] = useState({
    Monthly: "",
    Weekly: "",
    Daily: "",
    Hourly: "",
  });
  const [selectedCurrency2, setSelectedCurrency2] = useState("");
  const [timeFrameValues2, setTimeFrameValues2] = useState({
    Monthly: "",
    Weekly: "",
    Daily: "",
    Hourly: "",
  });
  const [selectedCurrency3, setSelectedCurrency3] = useState("");
  const [timeFrameValues3, setTimeFrameValues3] = useState({
    Monthly: "",
    Weekly: "",
    Daily: "",
    Hourly: "",
  });const [selectedCurrency4, setSelectedCurrency4] = useState("");
  const [timeFrameValues4, setTimeFrameValues4] = useState({
    Monthly: "",
    Weekly: "",
    Daily: "",
    Hourly: "",
  });

  const handleCurrencyChange1 = (e) => {
    setSelectedCurrency1(e.target.value);
  };

  const handleTimeFrameChange1 = (e) => {
    const { name, value } = e.target;
    setTimeFrameValues1((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleCurrencyChange2 = (e) => {
    setSelectedCurrency2(e.target.value);
  };

  const handleTimeFrameChange2 = (e) => {
    const { name, value } = e.target;
    setTimeFrameValues2((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleCurrencyChange3 = (e) => {
    setSelectedCurrency3(e.target.value);
  };

  const handleTimeFrameChange3 = (e) => {
    const { name, value } = e.target;
    setTimeFrameValues3((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleCurrencyChange4 = (e) => {
    setSelectedCurrency3(e.target.value);
  };

  const handleTimeFrameChange4 = (e) => {
    const { name, value } = e.target;
    setTimeFrameValues3((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div className={styles.AppContainer}>
      <AppSelector
        selectedCurrency={selectedCurrency1}
        timeFrameValues={timeFrameValues1}
        handleCurrencyChange={handleCurrencyChange1}
        handleTimeFrameChange={handleTimeFrameChange1}
        className={styles.AppSelector} // add the className
      />
      <AppSelector
        selectedCurrency={selectedCurrency2}
        timeFrameValues={timeFrameValues2}
        handleCurrencyChange={handleCurrencyChange2}
        handleTimeFrameChange={handleTimeFrameChange2}
        className={styles.AppSelector} // add the className
      />
      <AppSelector
        selectedCurrency={selectedCurrency3}
        timeFrameValues={timeFrameValues3}
        handleCurrencyChange={handleCurrencyChange3}
        handleTimeFrameChange={handleTimeFrameChange3}
        className={styles.AppSelector} // add the className
      />
      <AppSelector
        selectedCurrency={selectedCurrency4}
        timeFrameValues={timeFrameValues4}
        handleCurrencyChange={handleCurrencyChange4}
        handleTimeFrameChange={handleTimeFrameChange4}
        className={styles.AppSelector} // add the className
      />
    </div>
  );
};

export default AppContainer;