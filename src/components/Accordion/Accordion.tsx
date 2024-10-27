import { useState } from 'react';
import './Accordion.css';

interface AccordionProps {
  title: string;
  content: string;
}
const Accordion: React.FC<AccordionProps> = ({title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
      <div className="accordion-container">
        <div className="question" onClick={()=>  setIsActive(!isActive)}>
          <div>{title}</div>
          <div className='sign'>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && 
          <div className="answer">
            {content}
          </div>}
      </div>
  );
};

export default Accordion;
