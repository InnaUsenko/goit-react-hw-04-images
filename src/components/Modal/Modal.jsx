import React, { useEffect } from 'react';
import css from './Modal.module.css';
export const Modal = props => {
  //componentDidMount()
  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
  }, []);

  //componentWillUnmount()
  useEffect(() => {
    //componentDidMount()

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  const escFunction = event => {
    if (event.key === 'Escape') {
      props.closeModal();
    }
  };

  return (
    <div
      className={css.overlay}
      onClick={() => {
        props.closeModal();
      }}
    >
      <div className={css.modal}>
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  );
};
