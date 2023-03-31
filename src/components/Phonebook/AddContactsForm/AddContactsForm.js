import s from './AddContactsForm.module.css';
import React, { Component } from 'react';
import shortid from 'shortid';

import AddBtn from './AddBtn/AddBtn';
import InpunName from './InpunName/InpunName';
import InpunNumber from './InpunNumber/InpunNumber';
class AddContactsc extends Component {
  state = {
    name: '',
    number: '',
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact } = this.props;

    addContact({ id: shortid.generate(), name, number });
    this.setState({ name: '', number: '' });
  };
  getCurrentValue = e => {
    const { name } = e.currentTarget;
    this.setState({ [name]: e.currentTarget.value });
  };
  render() {
    const { name, number } = this.state;

    return (
      <form className={s.AddContactscContainer} onSubmit={this.onSubmit}>
        <InpunName onChange={this.getCurrentValue} inputValue={name} />
        <InpunNumber onChange={this.getCurrentValue} inputValue={number} />
        <AddBtn />
      </form>
    );
  }
}

export default AddContactsc;
