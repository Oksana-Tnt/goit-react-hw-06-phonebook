import IconButton from 'components/IconButton/IconButton';
import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const Contact = ({ name, number, onDeleteContact }) => (
  <div className="d-grid gap-2 d-flex justify-content-between">
    {name} : {number}
    <IconButton onClick={onDeleteContact} area-label="Delete contact">
      <RiDeleteBin6Fill />
    </IconButton>
  </div>
);

export default Contact;
