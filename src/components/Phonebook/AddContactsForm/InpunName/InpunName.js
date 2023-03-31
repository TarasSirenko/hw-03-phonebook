import React, { Component } from 'react';
import s from './InpunName.module.css';

class InpunName extends Component {
  render() {
    const { onChange, inputValue } = this.props;
    return (
      <label className={s.Lable}>
        Name
        <input
          className={s.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
          value={inputValue}
        />
      </label>
    );
  }
}

export default InpunName;
