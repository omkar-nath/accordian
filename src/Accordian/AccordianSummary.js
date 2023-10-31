import React from 'react';
import { useAccoridanContext } from './Accordian';
const AccordianSummary = ({ children }) => {
  const { isOpen, setIsOpen, id, currentOpen, handleCurrentOpen1 } =
    useAccoridanContext();

  if (currentOpen === id) return <div>{children}</div>;
};

export default AccordianSummary;
