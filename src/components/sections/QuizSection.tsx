import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../lib/constants';
import Button from '../ui/button';

interface QuizSectionProps {
  title?: string;
  subtitle?: string;
  onComplete?: (results: any) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({
  title = "DESCUBRA SEU TREINO IDEAL",
  subtitle = "Responda algumas perguntas e descubra qual tipo de treino combina mais com você",
  onComplete
}) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
      if (onComplete) {
        onComplete(newAnswers);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderQuizStart = () => (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-white">{title}</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">{subtitle}</p>
      <Button variant="primary" size="large" onClick={handleStart}>
        INICIAR QUIZ
      </Button>
    </div>
  );

  const renderQuizQuestion = () => {
    const question = QUIZ_QUESTIONS[currentQuestion];
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-sm text-purple-400 mb-2">Pergunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}</p>
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white">{question.question}</h3>
        </div>
        
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                answers[currentQuestion] === option
                  ? 'bg-purple-700 text-white'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        
        {currentQuestion > 0 && (
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={handlePrevious}>
              Voltar
            </Button>
          </div>
        )}
      </div>
    );
  };

  const renderQuizComplete = () => (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-white">Resultado Pronto!</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        Com base nas suas respostas, preparamos um plano de treino personalizado para você.
      </p>
      <Button variant="primary" size="large">
        VER MEU PLANO DE TREINO
      </Button>
    </div>
  );

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: '#121212' }}>
      <div className="max-w-6xl mx-auto">
        {!started && renderQuizStart()}
        {started && !completed && renderQuizQuestion()}
        {completed && renderQuizComplete()}
      </div>
    </section>
  );
};

export default QuizSection;
