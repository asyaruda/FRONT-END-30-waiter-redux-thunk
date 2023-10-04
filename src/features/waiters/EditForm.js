import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actionSaveItem } from './store/actions'
import style from './WaiterItem.module.css';

export function EditForm({ waiter, onWaiterSubmit }) {
  const dispatch = useDispatch()
  const editingWaiter = useSelector((state) => state.waiter.editingWaiter)
  const [firstName, setFirstName] = React.useState('editingWaiter.firstName');
  const [phone, setPhone] = React.useState('editingWaiter.phone');

  React.useEffect(() => {
    if (editingWaiterwaiter) {
      setFirstName(editingWaiter.firstName);
      setPhone(editingWaiter.phone); 
    }
  }, [waiter]);

  const onSubmit = (event) => {
    event.preventDefault();

    const formWaiter={
      ...editingWaiterwaiter,
      firstName,
      phone,
    }

    dispatch(actionSaveItem(formWaiter))
  };

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input value={firstName} onChange={onFirstNameChange} type="text" id="firstName" />

      <label htmlFor="phone">Phone</label>
      <input value={phone} onChange={onPhoneChange} type="text" id="phone" />

      <button type="submit" className={style.ml10}>
        Save
      </button>
    </form>
  )
}