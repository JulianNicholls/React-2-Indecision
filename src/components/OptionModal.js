import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = ({ selected, closeModal }) => (
  <Modal
    isOpen={!!selected}
    contentLabel="Selected Option"
    onRequestClose={closeModal}
    closeTimeoutMS={300}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{selected}</p>
    <button className="button" onClick={closeModal}>
      OK
    </button>
  </Modal>
);

export default OptionModal;
