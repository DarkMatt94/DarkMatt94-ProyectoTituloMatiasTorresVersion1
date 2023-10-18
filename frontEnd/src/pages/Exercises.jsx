import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

const Exercises = () => {
  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleGenerateQuestions = async () => {
    if (subject && difficulty) {
      setIsLoading(true); // Inicia la carga

      resetQuestions();

      //  prompt en función de la materia y la dificultad seleccionadas
      const prompt = `Create me a JSON of 2 on the subject of ${subject} of ${difficulty} difficulty, with 3 alternatives and their correct answer. The correct answer is specified with the "correctAnswer" field in each question`;

      try {
        const response = await Axios.post('http://localhost:3031/chat', {
          prompt,
        });

        // Obtener el arreglo de preguntas directamente desde la respuesta
        const generatedQuestions = response.data.questions;
        setQuestions(generatedQuestions);

        // Inicializar el estado de las respuestas del usuario
        const initialUserAnswers = new Array(generatedQuestions.length).fill(
          ''
        );
        setUserAnswers(initialUserAnswers);
      } catch (error) {
        console.error(error);
        // Maneja errores, como mostrar un mensaje de error al usuario.
      } finally {
        setIsLoading(false); // Finaliza la carga
      }
    }
  };

  const handleAnswerQuestion = (index, answer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[index] = answer;
    setUserAnswers(updatedUserAnswers);
  };

  const handleCheckAnswers = () => {
    //  lógica para verificar las respuestas
    const results = questions.map((question, index) => {
      const userAnswer = userAnswers[index];
      const correctAnswer = question.correctAnswer;
      const isCorrect = userAnswer === correctAnswer;

      return {
        question: question.question,
        userAnswer,
        correctAnswer,
        isCorrect,
      };
    });
    //  lógica para mostrar los resultados al usuario
    setResults(results);
  };

  const resetQuestions = () => {
    setQuestions([]);
    setUserAnswers([]);
    setResults([]);
  };

  return (
    <div>
      <h1>Generador de Preguntas</h1>
      <Form>
        <Form.Group controlId="subject">
          <Form.Label>Materia</Form.Label>
          <Form.Control
            as="select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}>
            <option value="">Selecciona la materia</option>
            <option value="Simple Past">Simple Past</option>
            {/* Agregar más opciones  */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="difficulty">
          <Form.Label>Dificultad</Form.Label>
          <Form.Control
            as="select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}>
            <option value="">Selecciona la dificultad</option>
            <option value="easy">Fácil</option>
            <option value="medium">Medio</option>
            <option value="hard">Difícil</option>
          </Form.Control>
        </Form.Group>

        <Button
          variant="primary"
          type="button"
          onClick={handleGenerateQuestions}
          disabled={isLoading}>
          Generar Preguntas
        </Button>
      </Form>
      {/* Muestra las preguntas generadas */}
      {isLoading && <p>Cargando...</p>}
      {questions.length > 0 && (
        <div>
          <h2>
            Preguntas Generadas | {subject} ({difficulty}):
          </h2>
          <ul>
            {questions.map((question, index) => (
              <div key={index} className="question">
                <p>
                  Question {index + 1}: {question.question}
                </p>
                {question.alternatives.map((alternative, alternativeIndex) => (
                  <div key={alternativeIndex}>
                    <label>
                      <input
                        type="radio"
                        value={alternative}
                        checked={userAnswers[index] === alternative}
                        onChange={() =>
                          handleAnswerQuestion(index, alternative)
                        }
                      />
                      {alternative}
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </ul>
          <Button variant="primary" type="button" onClick={handleCheckAnswers}>
            Comprobar Respuestas
          </Button>
        </div>
      )}
      {results.length > 0 && (
        <div>
          <h2>Resultados:</h2>
          {results.map((result, index) => (
            <div key={index} className="result">
              <p>{result.question}</p>
              <p>Tu respuesta: {result.userAnswer}</p>
              <p>Respuesta correcta: {result.correctAnswer}</p>
              <p>{result.isCorrect ? 'Correcta' : 'Incorrecta'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercises;
