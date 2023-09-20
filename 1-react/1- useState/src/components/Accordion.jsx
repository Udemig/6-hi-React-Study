import { useState } from 'react';

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-secondary p-3 rounded m-5">
      <div className="d-flex justify-content-between">
        <h3>{props.title}</h3>
        {/* isOpen state'ini tersine çevirme */}
        <p onClick={() => setIsOpen(!isOpen)} className="fs-1">
          {isOpen ? '-' : '+'}
        </p>
      </div>

      {/* isOpen koşulana göre ekrana alt kısmı basma */}
      {isOpen && <p>{props.content}</p>}
    </div>
  );
};

export default Accordion;
