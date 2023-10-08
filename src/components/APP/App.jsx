import { useState } from 'react';
import FormContact from 'components/FormContact/FormContact';
import Modal from '../Modal/Modal';
import Header from 'components/Header/Header';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container } from './APP.styled';

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <Container>
      <Header showModal={toggleModal} />

      <Filter />
      {isShowModal && (
        <Modal closeModal={toggleModal}>
          <FormContact closeModal={toggleModal} />
        </Modal>
      )}

      <ContactList />
    </Container>
  );
};
