import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import HeaderFAQ from '../../HeaderFAQ';
import Footer from '../../Footer';
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #1d033e;
`;

const Container = styled.div`
  position: absolute;
  top: 5%;
  color: #27094b;
  max-width: 768px;
`;

const Wrap = styled.div`
  background: #27094b;
  color: #fcc907;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 1px solid #6f5700;
  margin: 15px;
  border-radius: 10px;
  position: relative;
  h1 {
    padding: 15px;
    font-size: 20px;
    font-family: Marcellus;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #27094b;
  color: #fff;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: left;
  border: 1px solid #6f5700;
  margin: 15px;
  border-radius: 10px;

  p {
    font-size: 20px;
    padding: 15px;
    font-family: Nunito Sans;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="HEADER">
      <HeaderFAQ />
      <IconContext.Provider value={{ color: '#FCC907', size: '25px' }}>
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Accordion;