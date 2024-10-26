import { useState } from 'react';
import './Accordion.css';

const Accordion = ({title, content }: { title: string; content: string }) => {
  const [hidden, setHidden] = useState(true);

  const handleAnswer = () => {
    setHidden(!hidden);  
  };

  return (
    <div className="main-container">
      <div className="accordion-container">
        <div className="question" onClick={handleAnswer}>
          {title}
          <div>{hidden ? '+' : '-'}</div>
        </div>
        {!hidden && (
          <div className="answer">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
