import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './card.css'; // Import your custom CSS for styling
import cardd from "../components/cardd.png"
import mobile from "../components/mobile.png"
import wallet from "../components/wallet.jpeg"

function Cards() {
  const [showCards, setShowCards] = useState([false, false, false]);
  const delay = 1000; // Adjust the delay as needed (in milliseconds)
  const [showNextComponent, setShowNextComponent] = useState(false);

  const handleNextComponent = () => {
    setShowNextComponent(true);
  };

  useEffect(() => {
    showCards.forEach((_, index) => {
      setTimeout(() => {
        setShowCards(prevShowCards => {
          const updatedShowCards = [...prevShowCards];
          updatedShowCards[index] = true;
          return updatedShowCards;
        });
        setTimeout(() => {
          setShowCards(prevShowCards => {
            const updatedShowCards = [...prevShowCards];
            updatedShowCards[index] = false;
            return updatedShowCards;
          });
        }, 3000); // Adjust the delay for the cards to disappear
      }, index * delay);
    });
  }, []);

  return (
    <div className='header-container '>
      <div style={{fontFamily:"manrope",color:"white"}}>
        <h3>You deserve to be happy</h3>
      </div>
      <Container className='ppp'>
        <Row>
          {showCards.map((isShown, index) => (
            <Col key={index}>
              <div
                className={`card custom-card ${isShown ? '' : 'fade-out'}`}
              >
                <img src={index === 0 ? cardd : index === 1 ? mobile : wallet} className="card-img-top" alt={`Image ${index + 1}`} />
                <div className="card-body">
                  <h5 className="card-title">Card {index + 1}</h5>
                  <p className="card-text">Description for Card {index + 1}.</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
