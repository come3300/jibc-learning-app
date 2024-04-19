// components/AccordionSection.tsx

import React from 'react';
import Accordion from './AccordionComponent';

const AccordionSection: React.FC = () => {
  return (
    <div className="accordion-section">
      <Accordion title="Section 1">
        <p>Content for Section 1</p>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
