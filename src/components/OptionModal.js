import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = ({ selected, closeModal }) => (
  <Modal
    isOpen={!!selected}
    contentLabel="Selected Option"
    onRequestClose={closeModal}
  >
    <h3>Selected Option</h3>
    <p>{selected}</p>
    <button onClick={closeModal}>OK</button>
  </Modal>
);

export default OptionModal;
