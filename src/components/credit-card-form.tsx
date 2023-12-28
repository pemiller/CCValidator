import { useState } from "react"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LuhnCheck from "../utils/validator";

function CreaditCardForm() {

  // if I were dealing with multiple form controls I would useState({})
  // for each and manage all of these properties and a custom error message
  // in each
  const [touched, setTouched] = useState(true);
  const [validated, setValidated] = useState(false);
  const [cardNumber, setCardNumber] = useState('');

  // a validate button is different than a submit button (in an assumed full
  // credit card input form). You would get feedback of success in the form
  // of a page change or the display of the form changing. Since all we are 
  // doing is validating that the credit card number passed the check digit,
  // I'm using the built in bootstrap validated form control styling.
  const handleValidate = () => {
    const valid = LuhnCheck(cardNumber)
    setTouched(false);
    setValidated(valid);
  };

  const cardNumberChanged = (cardNumber: string) => {
    setCardNumber(cardNumber)
    setTouched(true)
  }

  // I added some other common credit card form input field to make the page
  // look more balanced but they aren't operable. 
  return (
    <Form noValidate>
      <Form.Group className="mb-3" controlId="formPersonInfo">
        <Form.Label>Cardholder Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      {/* There are many ways to beautify a card number input.
      Some personal favorites are identifying the issuer by the IIN
      then displaying an icon for it and adding padding spaces between
      groups for 4 numbers for readability. */}
      <Form.Group className="mb-3" controlId="formCardNumber">
        <Form.Label>Card Number</Form.Label>
        <Form.Control 
          required 
          value={cardNumber}
          onChange={e => cardNumberChanged(e.target.value)} 
          isValid={!touched && validated}
          isInvalid={!touched && !validated}
        />
        <Form.Control.Feedback type="invalid">
          Invalid card number!
        </Form.Control.Feedback>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formCardExpMonth">
          <Form.Label>Expiry Month</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formCardExpYear">
          <Form.Label>Expiry Year</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formCardCvc">
          <Form.Label>CVC</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" onClick={handleValidate}>
        Validate
      </Button>
    </Form>
  );
}

export default CreaditCardForm;
