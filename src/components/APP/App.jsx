import FormContact from 'components/FormContact/FormContact';
import { Container } from './APP.styled';
import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from 'redux/store';

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(()=>{return JSON.parse(localStorage.getItem("contacts"))??"" });

  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {

    const normalizedFilter = filter.toLowerCase();  

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.find(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
 
    toggleModal(); 
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };
 
  const value= useSelector(state=>state.myValue);
  const dispatch=useDispatch();
  return (
    <Container>
      <Header showModal={toggleModal} />
      <div>{value}</div>
      {/* <button onClick={()=>dispatch(increment(100))}>Increment</button>
      <button onClick={()=>dispatch(decrement(10))}>Decrement</button> */}
      <Filter value={filter} onChange={onChangeFilter} />
      {isShowModal && (
        <Modal closeModal={toggleModal}>
          <FormContact closeModal={toggleModal} addContact={addContact} />
        </Modal>
      )}

      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
