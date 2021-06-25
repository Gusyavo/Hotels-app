import React from 'react';
import { parametersExtractor } from '../../helpers/helpers'
import styles from './Select.module.css';

function Select({ indicator, hotels, setSortedKeys, sortedKeys }) {

  let options = parametersExtractor(hotels, indicator);
  options.unshift(`By ${indicator}`); // Add placeholder for the select tag

  const changeOption = (e) => {
    const { value } = e.target;
    setSortedKeys(prevState => ({
      ...prevState,
      [indicator]: value
    }))
  };

  return (
    <select 
    value={sortedKeys[indicator]} onChange={changeOption}
    className={styles.select}
    >
      {options.map((option, index) => (
        <option key={index}>
          {option}
        </option>
      ))}
    </select>
  )
};

export default Select;
