'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface FilipinianaTriviaProps {
  onComplete: () => void;
}

const questions: Question[] = [
  {
    question: "Sa anong lalawigan nagmula ang laing?",
    options: ["Pampanga", "Bicol", "Iloilo", "Cebu"],
    correctAnswer: 1
  },
  {
    question: "Ano ang tawag sa tradisyonal na Filipino dessert na gawa sa malagkit na bigas at gata?",
    options: ["Bilo-bilo", "Biko", "Sapin-sapin", "Maja Blanca"],
    correctAnswer: 1
  },
  {
    question: "Ano ang kabisera ng Pilipinas?",
    options: ["Quezon City", "Makati", "Manila (Maynila)", "Pasig"],
    correctAnswer: 2
  },
  {
    question: "Alin sa mga sumusunod ang pinakamalaking isla sa Pilipinas?",
    options: ["Palawan", "Mindanao", "Luzon", "Marinduque"],
    correctAnswer: 2
  },
  {
    question: "Saang lugar makikita ang Chocolate Hills?",
    options: ["Bohol", "Cebu", "Davao", "Leyte"],
    correctAnswer: 0
  },
  {
    question: "Ano ang petsa ng Araw ng Kalayaan ng Pilipinas?",
    options: ["Hulyo 4", "Mayo 1", "Hunyo 12", "Agosto 21"],
    correctAnswer: 2
  },
  {
    question: "Sino ang unang babaeng Pangulo ng Pilipinas?",
    options: ["Gloria Macapagal-Arroyo", "Miriam Defensor Santiago", "Corazon Aquino", "Leni Robredo"],
    correctAnswer: 2
  },
  {
    question: "Saang lalawigan makikita ang Taal Volcano?",
    options: ["Batangas", "Laguna", "Cavite", "Quezon"],
    correctAnswer: 0
  },
  {
    question: "Sino ang bayani na kilala sa pagsulat ng 'Noli Me Tangere' at 'El Filibusterismo'?",
    options: ["Andres Bonifacio", "Emilio Aguinaldo", "Jose Rizal", "Apolinario Mabini"],
    correctAnswer: 2
  },
  {
    question: "Sino ang Gobernador-Heneral na pinetisyon ng Women of Malolos para pahintulutan silang magtayo ng paaralan?",
    options: ["Ramon Blanco", "Valeriano Weyler", "Miguel López de Legazpi", "Basilio Agustín"],
    correctAnswer: 1
  }
];

export default function FilipinianaTrivia({ onComplete }: FilipinianaTriviaProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [showBonus, setShowBonus] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setAnswered(false);
      } else {
        setShowScore(true);
      }
    }, 2000);
  };

  const handleBonusComplete = () => {
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  if (showBonus) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE7] via-[#E8DCC4] to-[#F5EFE7]"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative max-w-2xl w-full"
        >
          <div className="textured-bg filipiniana-border p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl">
            {/* Decorative Header */}
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl sm:text-7xl mb-4"
              >
                🌺
              </motion.div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5D4037] mb-4">
                Bonus Question
              </h2>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"></div>
            </div>

            {/* Bonus Question */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#3E2723] text-center leading-relaxed mb-8">
                Maaari ko ba ako samahang maglakad patungo sa altar sa Mayo 21, 2026 bilang aking bridesmaid?
              </p>
            </motion.div>

            {/* Yes/Yes Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBonusComplete}
                className="bg-gradient-to-br from-[#5D4037] to-[#3E2723] text-white py-4 sm:py-6 px-6 sm:px-8 rounded-xl text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-[#D4AF37] touch-manipulation"
              >
                ✨ Oo! ✨
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBonusComplete}
                className="bg-gradient-to-br from-[#5D4037] to-[#3E2723] text-white py-4 sm:py-6 px-6 sm:px-8 rounded-xl text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-[#D4AF37] touch-manipulation"
              >
                💖 Syempre Oo! 💖
              </motion.button>
            </div>

            {/* Decorative Footer */}
            <div className="text-center text-[#D4AF37] text-2xl sm:text-3xl">
              ✦ ✦ ✦
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (showScore) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE7] via-[#E8DCC4] to-[#F5EFE7]"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative max-w-2xl w-full"
        >
          <div className="textured-bg filipiniana-border p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl">
            {/* Decorative Header */}
            <div className="text-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl sm:text-7xl mb-4"
              >
                {score >= 8 ? '🎉' : score >= 5 ? '😊' : '💪'}
              </motion.div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5D4037] mb-4">
                Quiz Results!
              </h2>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"></div>
            </div>

            {/* Score Display */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-center mb-8"
            >
              <div className="bg-gradient-to-br from-[#5D4037] to-[#3E2723] text-white rounded-2xl p-8 mb-6">
                <p className="text-lg sm:text-xl text-[#D4AF37] mb-2">Iyong Score:</p>
                <p className="text-5xl sm:text-6xl md:text-7xl font-bold">
                  {score} / {questions.length}
                </p>
              </div>
              
              <p className="font-serif text-xl sm:text-2xl text-[#3E2723] mb-6">
                {score >= 8 ? 'Ang galing mo! 🌟' : score >= 5 ? 'Magaling! 👏' : 'Good try! Keep learning! 📚'}
              </p>
            </motion.div>

            {/* Continue Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowBonus(true)}
              className="w-full bg-gradient-to-br from-[#5D4037] to-[#3E2723] text-white py-4 sm:py-6 px-6 sm:px-8 rounded-xl text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-[#D4AF37] touch-manipulation"
            >
              Magpatuloy ✨
            </motion.button>

            {/* Decorative Footer */}
            <div className="text-center text-[#D4AF37] text-2xl sm:text-3xl mt-6">
              ✦ ✦ ✦
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE7] via-[#E8DCC4] to-[#F5EFE7]"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-3xl w-full"
      >
        <div className="textured-bg filipiniana-border p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl sm:text-6xl mb-4"
            >
              🇵🇭
            </motion.div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#5D4037] mb-3">
              Filipino Trivia Quiz
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full mb-4"></div>
            <p className="text-[#A0522D] font-semibold text-base sm:text-lg">
              Tanong {currentQuestion + 1} ng {questions.length}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8DCC4] rounded-full h-3 sm:h-4 mb-6 sm:mb-8 overflow-hidden border-2 border-[#5D4037]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              className="bg-gradient-to-r from-[#D4AF37] to-[#A0522D] h-full rounded-full"
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-6 sm:mb-8"
            >
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#3E2723] mb-6 sm:mb-8 leading-relaxed text-center">
                {questions[currentQuestion].question}
              </h3>

              {/* Answer Options */}
              <div className="space-y-3 sm:space-y-4">
                {questions[currentQuestion].options.map((option, index) => {
                  const isCorrect = index === questions[currentQuestion].correctAnswer;
                  const isSelected = index === selectedAnswer;
                  
                  let buttonStyle = "bg-white hover:bg-[#F5EFE7]";
                  
                  if (showResult && isSelected) {
                    buttonStyle = isCorrect 
                      ? "bg-green-100 border-green-500" 
                      : "bg-red-100 border-red-500";
                  } else if (showResult && isCorrect) {
                    buttonStyle = "bg-green-100 border-green-500";
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!answered ? { scale: 1.02, x: 5 } : {}}
                      whileTap={!answered ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 border-[#5D4037] transition-all shadow-md hover:shadow-lg touch-manipulation ${buttonStyle} ${answered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-base sm:text-lg md:text-xl text-[#3E2723] pr-4">
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                        {showResult && isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          >
                            {isCorrect ? (
                              <CheckCircle2 className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                            ) : (
                              <XCircle className="text-red-600 w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                            )}
                          </motion.div>
                        )}
                        {showResult && !isSelected && isCorrect && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          >
                            <CheckCircle2 className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Score Tracker */}
          <div className="text-center mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5D4037] to-[#3E2723] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Score: {score}</span>
            </div>
          </div>

          {/* Decorative Footer */}
          <div className="text-center text-[#D4AF37] text-xl sm:text-2xl mt-6">
            ✦ ✦ ✦
          </div>
        </div>
      </motion.div>
    </div>
  );
}
