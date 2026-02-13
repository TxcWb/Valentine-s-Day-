import { useState } from 'react';
import { Heart, CheckCircle2, XCircle, Trophy, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
}

const questions: Question[] = [
  {
    question: "Where was our first dinner together?",
    options: ["Jaokiks", "Prados Kitchennete", "AFC", "Chowking"],
    correctAnswer: 0,
    feedback: "Galing cuh, may bitaw ka eh no. ♥"
  },
  {
    question: "What's my favorite thing about you?",
    options: ["Your smile", "Your laugh", "Your snr membership", "Everything!"],
    correctAnswer: 3,
    feedback: "Of course! I love everything about you! 💕"
  },
  {
    question: "Where did we have our first tarong na date?",
    options: ["Philippine Eagle Center", "SM Ecoland", "Coastal", "Boulevard"],
    correctAnswer: 0,
    feedback: " Sheeeshhh panis ka boi!"
  },
  {
    question: " Unsa ang ako gidala na sud an tung first time niadto ko sa imo dorm?",
    options: ["Sisig gikan sa RJ Inato", "Chowking", "Mcdo", "Manok gikan sa Nammanok"],
    correctAnswer: 1,
    feedback: "The sud an that started it all! (nakapulaw og ahat)"
  },
  {
    question: "What do I love doing with you the most?",
    options: ["Mag motor motor", "Mag jogging", "Maglaag", "Everything together"],
    correctAnswer: 3,
    feedback: "Every moment with you is my favorite! 💖"
  }
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showFeedback) return;

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/80 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4">
            Quiz Complete!
          </h2>

          <div className="text-6xl font-bold text-pink-500 mb-6">
            {score} / {questions.length}
          </div>

          <p className="text-2xl text-rose-700 mb-8">
            {score === questions.length
              ? "Waw, Mean to be gyud diay ta! 💕"
              : score >= questions.length / 2
                ? "Waw! Meant to be gyud diay ta ♥"
                : "Di na diay ko nimo lablab...... "}
          </p>

          <button
            onClick={restartQuiz}
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Try Again ♥
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4 flex items-center justify-center gap-3">
          <Sparkles className="w-10 h-10 text-pink-500" />
          How Well Do You Know Us?
          <Sparkles className="w-10 h-10 text-pink-500" />
        </h2>
        <div className="flex items-center justify-center gap-4 text-lg text-rose-700">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>•</span>
          <span>Score: {score}</span>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white/80 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="mb-8">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-rose-700 text-center mb-2">
              {questions[currentQuestion].question}
            </h3>
          </div>

          <div className="grid gap-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === questions[currentQuestion].correctAnswer;
              const showResult = showFeedback && isSelected;

              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showFeedback}
                  whileHover={!showFeedback ? { scale: 1.02 } : {}}
                  whileTap={!showFeedback ? { scale: 0.98 } : {}}
                  className={`p-5 rounded-2xl font-semibold text-lg transition-all text-left flex items-center gap-3 ${showResult
                    ? isCorrect
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-red-500 text-white shadow-lg'
                    : showFeedback && isCorrect
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-gradient-to-r from-pink-100 to-rose-100 text-rose-700 hover:from-pink-200 hover:to-rose-200 hover:shadow-lg'
                    } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/30 flex items-center justify-center font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {showFeedback && isCorrect && (
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  )}
                  {showResult && !isCorrect && (
                    <XCircle className="w-6 h-6 flex-shrink-0" />
                  )}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-6 mb-6">
                  <p className="text-xl text-rose-700 font-medium">
                    {questions[currentQuestion].feedback}
                  </p>
                </div>

                <button
                  onClick={nextQuestion}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  {currentQuestion < questions.length - 1 ? 'Next Question ♥' : 'See Results! 💕'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
