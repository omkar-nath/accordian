import React from 'react';
import { useAccoridanContext } from './Accordian.js';

const AccordianDetails = ({ children }) => {
  const {
    isOpen,
    setIsOpen,
    id,
    currentOpen,
    handleCurrentOpen,
    handleCurrentOpen1,
  } = useAccoridanContext();

  const onClickHandle = () => {
    if (id === currentOpen) {
      handleCurrentOpen1(null);
    } else {
      handleCurrentOpen1(id);
    }
  };

  return <div onClick={onClickHandle}> {children}</div>;
};

export default AccordianDetails;
