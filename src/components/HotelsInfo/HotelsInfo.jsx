import React, { useState, useEffect } from 'react';
import styles from './HotelsInfo.module.css';

import hotelsList from '../../hotels/hotels.json';

import Hotel from '../Hotel/Hotel';
import SortButton from '../SortButton/SortButton';
import Select from '../Select/Select';

function HotesTable() {
  const keys = Object.keys(hotelsList[0]);

  let initialSortedKeys = {};
  keys.forEach(key => initialSortedKeys[key] = `By ${key}`);

  const [hotels, setHotels] = useState(hotelsList);
  const [sortedKeys, setSortedKeys] = useState(initialSortedKeys);

  useEffect(() => {
    const keys = Object.keys(hotelsList[0]);

    const filterHotels = () => {
      let filteredHotels = hotelsList;
      keys.forEach(key => {
        if (!sortedKeys[key].toString().includes('By ') && sortedKeys[key] !== '') {
          filteredHotels = filteredHotels.filter(hotel => hotel[key] === sortedKeys[key]);
        }
      });
      setHotels(filteredHotels)
    };

    filterHotels();
  }, [sortedKeys]);

  return (
    <div className={`${styles.container}`}>
      <div className={styles['filters-wrapper']}>
        <div className={`${styles['filters-block']}`}>
          <span>ORDER HOTELS</span>
          <div className={`${styles['filters-elements']}`}>
            {keys.map((key, index) => (
              <SortButton setHotels={setHotels} indicator={key} key={index} />
            ))}
          </div>
        </div>
        <div className={`${styles['filters-block']}`}>
          <span>FILTER HOTELS</span>
          <div className={`${styles['filters-elements']} ${styles['select-elements']}`}>
            {keys.map((key, index) => (
              <Select
                key={index}
                hotels={sortedKeys[key].toString().includes('By ') ? hotels : hotelsList}
                indicator={key}
                setSortedKeys={setSortedKeys}
                sortedKeys={sortedKeys}
              />
            ))}
          </div>
        </div>
      </div>
      <ul className={styles['hotels-list']}>
        {hotels.length > 0 && hotels.map((hotel, index) => <Hotel hotel={hotel} keys={keys} key={index} index={index} />)}
        {hotels.length === 0 && <h2>There are no results</h2>}

      </ul>
    </div>
  )
};

export default HotesTable;
