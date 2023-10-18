import React from 'react';
import Alert from 'react-bootstrap/Alert';

function InvalidEmailMessage({ email }) {
  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  return (
    <Alert variant={isValidEmail(email) ? 'success' : 'danger'}>
      {isValidEmail(email)
        ? 'El correo electrónico ingresado es válido.'
        : 'Por favor, ingrese un correo electrónico válido.'}
    </Alert>
  );
}

export default InvalidEmailMessage;
