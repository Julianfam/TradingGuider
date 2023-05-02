import React, { useState, useEffect } from 'react';
import styles from "@styles/Clock.module.scss"

function Clock() {
  const [time, setTime] = useState('');
  const [timezone, setTimezone] = useState('America/New_York');

  useEffect(() => {
    function getTime(timezone) {
      const now = new Date();
      const options = { timeZone: timezone, hour12: false };
      const timeString = now.toLocaleTimeString('en-US', options);
      setTime(timeString);
    }

    // Update clock every second
    const interval = setInterval(() => getTime(timezone), 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  function handleChange(event) {
    setTimezone(event.target.value);
  }

  return (
    <div className={styles.module}>
  <label htmlFor="timezone-select">Timezone:</label>
  <select id="timezone-select" value={timezone} onChange={handleChange}>
    <option value="America/New_York">New York</option>
    <option value="Europe/London">London</option>
    <option value="Asia/Tokyo">Japan</option>
    <option value="Australia/Sydney">Australia</option>
  </select>
  <div className={styles.clock}>{time}</div>
</div>
  );
}

export default Clock;
