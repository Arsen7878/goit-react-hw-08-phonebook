import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contatcs';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import c from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onCloseModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleBackdropClick = event => {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className={c.Overlay} onClick={handleBackdropClick}>
      <div className={c.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modal;
