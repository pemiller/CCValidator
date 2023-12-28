import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CreditCardForm from './components/credit-card-form'

function App() {
  return (
    <Container className="p-3">
      <Container className="p-5 text-center">
        <h1 className="header">
          Credit Card Validator Take Home Assignment
        </h1>
      </Container>
      <Row className="p-5">
        <CreditCardForm/>
      </Row>
    </Container>
  );
}

export default App;
