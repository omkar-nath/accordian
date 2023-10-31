import React, { useState } from 'react';
import './style.css';
import { Accordian } from './Accordian/Accordian.js';
import AccordianDetails from './Accordian/AccordianDetails.js';
import AccordianSummary from './Accordian/AccordianSummary.js';

export default function App() {
  const [currentOpen, setCurrentOpen] = useState();
  const handleCurrentOpen1 = (id) => {
    setCurrentOpen(id);
  };
  return (
    <div>
      <Accordian
        id="1"
        currentOpen={currentOpen}
        handleCurrentOpen1={handleCurrentOpen1}
      >
        <AccordianDetails>
          <h4>Collapsible Group Item 0</h4>
        </AccordianDetails>
        <AccordianSummary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </AccordianSummary>
      </Accordian>
      <Accordian
        id="2"
        currentOpen={currentOpen}
        handleCurrentOpen1={handleCurrentOpen1}
      >
        <AccordianDetails>
          <h4>Collapsible Group Item 1</h4>
        </AccordianDetails>
        <AccordianSummary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </AccordianSummary>
      </Accordian>
      <Accordian
        id="3"
        currentOpen={currentOpen}
        handleCurrentOpen1={handleCurrentOpen1}
      >
        <AccordianDetails>
          <h4>Collapsible Group Item 2</h4>
        </AccordianDetails>
        <AccordianSummary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </AccordianSummary>
      </Accordian>
    </div>
  );
}
