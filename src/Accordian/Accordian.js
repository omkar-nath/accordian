import React, { createContext, useContext } from 'react';

const AccordianContext = createContext(null);

const Accordian = ({ children, id, currentOpen, handleCurrentOpen1 }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCurrentOpen = (id) => {
    setCurrentOpen(id);
  };
  return (
    <AccordianContext.Provider
      value={{
        isOpen,
        setIsOpen,
        id,
        currentOpen,
        handleCurrentOpen,
        handleCurrentOpen1,
      }}
    >
      {children}
    </AccordianContext.Provider>
  );
};

function useAccoridanContext() {
  const context = useContext(AccordianContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}
export { Accordian, useAccoridanContext };
