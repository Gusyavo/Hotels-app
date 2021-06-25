import React, {Fragment} from 'react';
import styles from './Hotel.module.css';

function Hotel({ hotel, keys, index }) {

  return (
    <li className={styles.hotel}>
      {keys.map((key, i) => (
        <Fragment key={i}>
          <span className={styles.key}>{key}: </span>
          <span className={styles.value}>{hotel[key]}</span>
        </Fragment>
      ))}
      <img src={`images/image${index}.jpg`} alt={`hotel${index}`} />
    </li>
  )
};

export default Hotel;
