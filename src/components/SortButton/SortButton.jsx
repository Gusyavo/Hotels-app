import React, { useState } from 'react';
import styles from './SortButton.module.css';

function Button({ indicator, setHotels }) {
  const [isOrderReverse, setIsOrderReverse] = useState(true);

  const orderHotels = (param) => {
    setHotels(prevState => {
      const stateClone = [...prevState];

      const sortedHotels = stateClone.sort((a, b) => {
        if (a[param] < b[param]) return isOrderReverse ? -1 : 1;
        if (a[param] > b[param]) return isOrderReverse ? 1 : -1;
        return 0;
      })

      return sortedHotels
    })
    setIsOrderReverse(prevState => !prevState)
  };

  return (
    <button 
    onClick={() => orderHotels(indicator)}
    className={styles.button}
    >
      {indicator}
      </button>
  )
};

export default Button;
