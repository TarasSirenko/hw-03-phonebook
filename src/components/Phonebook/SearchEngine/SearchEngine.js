import React, { Component } from 'react';
import s from './SearchEngine.module.css';

class SearchEngine extends Component {
  render() {
    const { filter, onInputChange } = this.props;
    return (
      <label className={s.Lable}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={s.SearchFilter}
          value={filter}
          onChange={onInputChange}
        />
      </label>
    );
  }
}

export default SearchEngine;
