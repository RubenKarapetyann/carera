import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.css';

function Search() {
  const [inputSize, setInputSize] = useState({ fontSize: '14px', width: '50px' });

  const handleClick = () => {
    setInputSize({ fontSize: '18px', width: '200px' });
  };

  const handleBlur = () => {
    setInputSize({ fontSize: '14px', width: '50px' });
  };

  return (
    <div className={styles['search-container']}>
      <input
        className={styles['search-input']}
        type="text"
        style={inputSize}
        onClick={handleClick}
        onBlur={handleBlur}
      />
      <FontAwesomeIcon className={styles['search-icon']} icon={faSearch} />
    </div>
  );
}

export default Search;
