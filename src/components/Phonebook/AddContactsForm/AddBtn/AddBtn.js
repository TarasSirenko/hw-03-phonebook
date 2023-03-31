import s from './AddBtn.module.css';
import React, { Component } from 'react';

class AddBtn extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button type="submit" className={s.Button} onClick={onClick}>
        Add contact
      </button>
    );
  }
}

export default AddBtn;
