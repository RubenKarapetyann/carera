import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.css';

function Search() {
  const [inputVisible, setInputVisible] = useState(false);

  const handleClick = () => {
    setInputVisible(true);
  };

  const handleBlur = () => {
    setInputVisible(false);
  };

  const inputStyle = {
    width: inputVisible ? '200px' : '50px',
    fontSize: inputVisible ? '18px' : '14px',
  };

  return (
    <div className={styles['search-container']}>
      {!inputVisible && (
        <button className={styles['search-button']} style={inputStyle} onClick={handleClick}>
          <FontAwesomeIcon className={styles['search-icon']} icon={faSearch} />
        </button>
      )}

    {inputVisible && (
      <div className={styles['search-input-container']}>
        <input
          className={styles['search-input']}
          type="text"
          style={inputStyle}
          onBlur={handleBlur}
        />
        <FontAwesomeIcon className={styles['search-icon-input']} icon={faSearch} />
      </div>
    )}
    </div>
  );
}

export default Search;
