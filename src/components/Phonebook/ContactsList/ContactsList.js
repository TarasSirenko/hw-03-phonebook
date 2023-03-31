import React, { Component } from 'react';
import s from './ContactsList.module.css';

class ContactList extends Component {
  state = {};
  render() {
    const { contactsList, removeContact } = this.props;

    return (
      <div className={s.Container}>
        <h2 className={s.Title}>Contacts:</h2>
        <ul className={s.ContactList}>
          {contactsList.map(({ name, id, number }) => {
            return (
              <li key={id} className={s.Item}>
                {name}: {number}
                <button
                  type="button"
                  className={s.Button}
                  onClick={() => removeContact(id)}
                >
                  Delate
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
