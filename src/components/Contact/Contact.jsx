import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import IconButton from 'components/IconButton/IconButton';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className="d-grid gap-2 d-flex justify-content-between">
      {name} : {number}
      <IconButton onClick={handleDelete} area-label="Delete contact">
        <RiDeleteBin6Fill />
      </IconButton>
    </div>
  );
};

export default Contact;
