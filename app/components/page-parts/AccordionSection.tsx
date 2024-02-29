// components/AccordionSection.tsx

import React from 'react';
import Accordion from './AccordionComponent';

const AccordionSection: React.FC = () => {
  return (
    <div className="accordion-section">
      <Accordion title="Section 1">
        <p>Content for Section 1</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>Content for Section 2</p>
      </Accordion>
      <Accordion title="Section 3">
        <p>Content for Section 3</p>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
