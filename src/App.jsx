import React, { useState, useEffect } from 'react';
import { Sparkles, Star, RotateCcw, HelpCircle, Rocket, Wand2, ArrowLeft } from 'lucide-react';

const WEEKS = [
  {
    label: 'שבוע 1',
    words: [
      { eng: 'FORGET', heb: 'לשכוח' },
      { eng: 'EVERYONE', heb: 'כולם' },
      { eng: 'FIRST', heb: 'ראשון' },
      { eng: 'SECOND', heb: 'שני' },
      { eng: 'THIRD', heb: 'שלישי' },
      { eng: 'GIVE', heb: 'לתת' },
      { eng: 'HEALTHY', heb: 'בריא' },
      { eng: 'INSTRUCTIONS', heb: 'הוראות' },
      { eng: 'MEAN', heb: 'להתכוון / משמעות' },
      { eng: 'TRY', heb: 'לנסות' },
    ],
  },
  {
    label: 'שבוע 2',
    words: [
      { eng: 'FORGET', heb: 'לשכוח' },
      { eng: 'EVERYONE', heb: 'כולם' },
      { eng: 'FIRST', heb: 'ראשון' },
      { eng: 'SECOND', heb: 'שני' },
      { eng: 'THIRD', heb: 'שלישי' },
      { eng: 'GIVE', heb: 'לתת' },
      { eng: 'HEALTHY', heb: 'בריא' },
      { eng: 'INSTRUCTIONS', heb: 'הוראות' },
      { eng: 'MEAN', heb: 'להתכוון / משמעות' },
      { eng: 'TRY', heb: 'לנסות' },
    ],
  },
  {
    label: 'שבוע 3',
    words: [
      { eng: 'SELDOM', heb: 'לעיתים רחוקות' },
      { eng: 'REGULARLY', heb: 'באופן קבוע' },
      { eng: 'NEVER', heb: 'אף פעם לא' },
      { eng: 'ALWAYS', heb: 'תמיד' },
      { eng: 'USUALLY', heb: 'בדרך כלל' },
      { eng: 'OFTEN', heb: 'לעיתים קרובות' },
      { eng: 'TWICE', heb: 'פעמיים' },
      { eng: 'TODAY', heb: 'היום' },
      { eng: 'EVERY', heb: 'כל יום / שבוע / שנה' },
      { eng: 'MONDAY', heb: 'בימי שני' },
    ],
  },
  {
    label: 'שבוע 4',
    words: [
      { eng: 'FORGET', heb: 'לשכוח' },
      { eng: 'EVERYONE', heb: 'כולם' },
      { eng: 'FIRST', heb: 'ראשון' },
      { eng: 'SECOND', heb: 'שני' },
      { eng: 'THIRD', heb: 'שלישי' },
      { eng: 'GIVE', heb: 'לתת' },
      { eng: 'HEALTHY', heb: 'בריא' },
      { eng: 'INSTRUCTIONS', heb: 'הוראות' },
      { eng: 'MEAN', heb: 'להתכוון / משמעות' },
      { eng: 'TRY', heb: 'לנסות' },
    ],
  },
  {
    label: 'שבוע 5',
    words: [
      { eng: 'SPECIAL', heb: 'מיוחד' },
      { eng: 'ONCE', heb: 'פעם אחת' },
      { eng: 'ABOUT', heb: 'על / בערך' },
      { eng: 'BECAUSE', heb: 'בגלל / כי' },
      { eng: 'LEARN', heb: 'ללמוד' },
      { eng: 'UNDERSTAND', heb: 'להבין' },
      { eng: 'VISIT', heb: 'לבקר' },
      { eng: 'TONIGHT', heb: 'הלילה' },
      { eng: 'TOMORROW', heb: 'מחר' },
      { eng: 'TODAY', heb: 'היום' },
    ],
  },
  {
    label: 'שבוע 6',
    words: [
      { eng: 'EVERYTHING', heb: 'הכל' },
      { eng: 'PRACTICE', heb: 'לתרגל / אימון' },
      { eng: 'FAMOUS', heb: 'מפורסם' },
      { eng: 'WEEKEND', heb: 'סוף שבוע' },
      { eng: 'HEAR', heb: 'לשמוע' },
      { eng: 'HERE', heb: 'כאן' },
      { eng: 'BELOW', heb: 'למטה / מתחת' },
      { eng: 'ANOTHER', heb: 'אחר / נוסף' },
      { eng: 'ARRIVE', heb: 'להגיע' },
      { eng: 'MORNING', heb: 'ערב טוב / בוקר טוב' },
    ],
  },
  {
    label: 'שבוע 7',
    words: [
      { eng: 'INFORMATION', heb: 'מידע' },
      { eng: 'INTERESTING', heb: 'מעניין' },
      { eng: 'IDEA', heb: 'רעיון' },
      { eng: 'LEAVE', heb: 'לעזוב' },
      { eng: 'MEET', heb: 'לפגוש' },
      { eng: 'MINUTE', heb: 'דקה' },
      { eng: 'HOUR', heb: 'שעה' },
      { eng: 'PLAN', heb: 'תוכנית / לתכנן' },
      { eng: 'STAY', heb: 'להישאר' },
      { eng: 'SPEAK', heb: 'לדבר' },
    ],
  },
  {
    label: 'שבוע 8',
    words: [
      { eng: 'WORRY', heb: 'לדאוג' },
      { eng: 'VACATION', heb: 'חופשה' },
      { eng: 'VISITOR', heb: 'מבקר / אורח' },
      { eng: 'QUESTION', heb: 'שאלה' },
      { eng: 'NOW', heb: 'עכשיו / ממש עכשיו' },
      { eng: 'MOMENT', heb: 'כרגע' },
      { eng: 'PRESENT', heb: 'נכון לעכשיו' },
      { eng: 'WRITE', heb: 'לכתוב' },
      { eng: 'COPY', heb: 'להעתיק' },
      { eng: 'WEEK', heb: 'השנה / החודש / היום / השבוע' },
    ],
  },
];

const apiKey = "";

async function callGeminiAPI(prompt, retries = 5) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseMimeType: 'application/json' },
  };
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      let cleanText = text;
      if (cleanText.startsWith('```')) {
        cleanText = cleanText.replace(/```(json)?\n?/g, '').replace(/```/g, '');
      }
      return JSON.parse(cleanText.trim());
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((res) => setTimeout(res, Math.pow(2, i) * 1000));
    }
  }
}

const BabyYodaSVG = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_15px_rgba(126,185,115,0.6)]">
    <path d="M 20 50 Q 0 35 5 25 Q 15 35 30 45" fill="#7eb973" />
    <path d="M 80 50 Q 100 35 95 25 Q 85 35 70 45" fill="#7eb973" />
    <ellipse cx="50" cy="48" rx="26" ry="19" fill="#7eb973" />
    <circle cx="38" cy="46" r="4.5" fill="#111" />
    <circle cx="62" cy="46" r="4.5" fill="#111" />
    <circle cx="39" cy="45" r="1.5" fill="#fff" />
    <circle cx="63" cy="45" r="1.5" fill="#fff" />
    <path d="M 45 55 Q 50 58 55 55" stroke="#4a6b43" strokeWidth="1.5" fill="transparent" strokeLinecap="round" />
    <path d="M 32 62 L 20 100 L 80 100 L 68 62 Z" fill="#d4c4a8" />
    <path d="M 28 62 Q 50 80 72 62 Z" fill="#bca886" />
    <path d="M 40 100 L 40 85 L 60 85 L 60 100" fill="#a39070" />
  </svg>
);

const LightsaberSVG = ({ color = '#3b82f6', rotation = '0', className = '' }) => (
  <svg viewBox="0 0 20 120" className={`w-8 h-40 transform rotate-${rotation} drop-shadow-[0_0_12px_${color}] ${className}`}>
    <rect x="7" y="0" width="6" height="85" fill="#ffffff" rx="3" />
    <rect x="6" y="0" width="8" height="85" fill={color} rx="4" opacity="0.6" />
    <rect x="5" y="85" width="10" height="35" fill="#cbd5e1" rx="2" />
    <rect x="3" y="88" width="14" height="4" fill="#1e293b" />
    <rect x="3" y="96" width="14" height="4" fill="#1e293b" />
    <rect x="8" y="105" width="4" height="6" fill="#ef4444" rx="1" />
  </svg>
);

function WeekGame({ words }) {
  const [wordList, setWordList] = useState(words);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('playing');
  const [message, setMessage] = useState('');
  const [gameMode, setGameMode] = useState('menu');
  const [scramblePool, setScramblePool] = useState([]);
  const [scrambleAnswer, setScrambleAnswer] = useState([]);
  const [quizOptions, setQuizOptions] = useState([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiTheme, setAiTheme] = useState('');
  const [aiSentence, setAiSentence] = useState(null);

  const currentWord = wordList[currentWordIndex];

  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  useEffect(() => {
    setWordList(words);
    setCurrentWordIndex(0);
    setScore(0);
    setGameMode('menu');
    setStatus('playing');
    setMessage('');
    setAiSentence(null);
  }, [words]);

  useEffect(() => {
    if (gameMode === 'scramble') {
      const letters = currentWord.eng.split('');
      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      setScramblePool(letters.map((char, id) => ({ char, id })));
      setScrambleAnswer(Array(currentWord.eng.length).fill(null));
      setStatus('playing');
      setMessage('');
    } else if (gameMode === 'quiz') {
      const options = [currentWord];
      const available = wordList.filter((w) => w.eng !== currentWord.eng);
      const shuffled = available.sort(() => 0.5 - Math.random());
      options.push(...shuffled.slice(0, 3));
      setQuizOptions(options.sort(() => 0.5 - Math.random()));
      setStatus('playing');
      setMessage('');
    } else if (gameMode === 'typing') {
      setUserInput('');
      setStatus('playing');
      setMessage('');
    }
  }, [currentWordIndex, gameMode, wordList, currentWord]);

  useEffect(() => {
    if (gameMode === 'scramble' && status === 'playing') {
      const currentAnswer = scrambleAnswer.map((item) => (item ? item.char : '')).join('');
      if (currentAnswer.length === currentWord.eng.length && !scrambleAnswer.includes(null)) {
        if (currentAnswer === currentWord.eng) {
          setStatus('success');
          setMessage('מעולה! הרכבתם את המילה! ⭐');
          setScore((s) => s + 15);
        } else {
          setStatus('error');
          setMessage("אוי... טעות! לחצו על 'לנסות שוב' כדי להתחיל מחדש 🚀");
        }
      }
    }
  }, [scrambleAnswer, gameMode, currentWord.eng, status]);

  useEffect(() => {
    if (userInput.length === currentWord.eng.length && status === 'playing') {
      if (userInput === currentWord.eng) {
        setStatus('success');
        setMessage('כל הכבוד! הצלחתם! ⭐');
        setScore((s) => s + 10);
      } else {
        setStatus('error');
        setMessage("אוי... טעות! לחצו על 'לנסות שוב' כדי להתחיל מחדש 🚀");
      }
    }
  }, [userInput, currentWord.eng, status]);

  const handleKeyPress = (letter) => {
    if (status !== 'playing') return;
    if (userInput.length < currentWord.eng.length) {
      setUserInput((prev) => prev + letter);
    }
  };

  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % wordList.length);
    setUserInput('');
    setStatus('playing');
    setMessage('');
    setAiSentence(null);
  };

  const restartCurrentWord = () => {
    setStatus('playing');
    setMessage('');
    if (gameMode === 'typing') {
      setUserInput('');
    } else if (gameMode === 'scramble') {
      const letters = currentWord.eng.split('');
      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      setScramblePool(letters.map((char, id) => ({ char, id })));
      setScrambleAnswer(Array(currentWord.eng.length).fill(null));
    }
  };

  const handleHint = () => {
    if (status !== 'playing') return;
    const next = currentWord.eng[userInput.length];
    if (next) setUserInput((prev) => prev + next);
  };

  const clearInput = () => {
    if (status !== 'playing') return;
    setUserInput('');
  };

  const handleScramblePoolClick = (item, index) => {
    if (status !== 'playing') return;
    const firstEmpty = scrambleAnswer.findIndex((v) => v === null);
    if (firstEmpty !== -1) {
      const newAnswer = [...scrambleAnswer];
      newAnswer[firstEmpty] = item;
      setScrambleAnswer(newAnswer);
      const newPool = [...scramblePool];
      newPool.splice(index, 1);
      setScramblePool(newPool);
    }
  };

  const handleScrambleAnswerClick = (item, index) => {
    if (status !== 'playing' || !item) return;
    const newAnswer = [...scrambleAnswer];
    newAnswer[index] = null;
    setScrambleAnswer(newAnswer);
    setScramblePool([...scramblePool, item]);
  };

  const handleQuizClick = (selectedWord) => {
    if (status !== 'playing') return;
    if (selectedWord.eng === currentWord.eng) {
      setStatus('success');
      setMessage('תשובה נכונה! כל הכבוד! ⭐');
      setScore((s) => s + 5);
    } else {
      setStatus('error');
      setMessage("אוי... טעות! לחצו על 'לנסות שוב' כדי להתחיל מחדש 🚀");
    }
  };

  const generateMagicSentence = async () => {
    if (isAiLoading) return;
    setIsAiLoading(true);
    try {
      const prompt = `Write a very short, simple, and encouraging sentence for a kid learning English. The sentence MUST include the word '${currentWord.eng}'. The theme should be loosely related to Space, Star Wars or learning. Return ONLY valid JSON in this exact format: {"eng": "English sentence here", "heb": "Hebrew translation here"}`;
      const result = await callGeminiAPI(prompt);
      setAiSentence(result);
    } catch {
      setMessage('אוי, קסם ה-AI לא עבד הפעם. נסו שוב!');
    }
    setIsAiLoading(false);
  };

  const generateNewThemeWords = async () => {
    if (!aiTheme || isAiLoading) return;
    setIsAiLoading(true);
    try {
      const prompt = `Generate a JSON array of exactly 5 simple English words related to the theme: '${aiTheme}'. Return ONLY valid JSON in this format: [{"eng": "WORD", "heb": "Hebrew translation"}]. The English words should be uppercase, no longer than 8 letters.`;
      const result = await callGeminiAPI(prompt);
      if (Array.isArray(result) && result.length > 0) {
        setWordList(result);
        setCurrentWordIndex(0);
        setUserInput('');
        setStatus('playing');
        setMessage('רשימת מילים חדשה נטענה! 🚀');
        setAiSentence(null);
        setAiTheme('');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch {
      setMessage('שגיאה ביצירת המילים. נסו נושא אחר!');
      setTimeout(() => setMessage(''), 3000);
    }
    setIsAiLoading(false);
  };

  return (
    <div className="z-10 w-full max-w-2xl bg-slate-800/80 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-yellow-400 p-6 md:p-10 text-center relative">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full border border-yellow-400">
          <Star className="text-yellow-400 fill-yellow-400 w-6 h-6" />
          <span className="text-yellow-400 font-bold text-xl">{score} נקודות</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>
          גלקסיית המילים
        </h1>
      </div>

      {gameMode === 'menu' ? (
        <div className="flex flex-col gap-4 py-6 md:py-10">
          <h2 className="text-white text-xl md:text-2xl mb-4 opacity-90">בחרו אימון באקדמיית הג'דיי:</h2>
          <button onClick={() => setGameMode('typing')} className="w-full bg-slate-700 hover:bg-blue-600 border-2 border-blue-500 text-white text-lg md:text-xl font-bold py-5 px-6 rounded-2xl shadow-[0_6px_0_rgba(30,58,138,1)] active:translate-y-2 active:shadow-none transition-all">
            <span className="flex items-center justify-center gap-3">⌨️ הקלדת מילים <span className="text-sm font-normal opacity-80">(למידת כתיב)</span></span>
          </button>
          <button onClick={() => setGameMode('scramble')} className="w-full bg-slate-700 hover:bg-purple-600 border-2 border-purple-500 text-white text-lg md:text-xl font-bold py-5 px-6 rounded-2xl shadow-[0_6px_0_rgba(88,28,135,1)] active:translate-y-2 active:shadow-none transition-all">
            <span className="flex items-center justify-center gap-3">🧩 אותיות מבולבלות <span className="text-sm font-normal opacity-80">(סידור נכון)</span></span>
          </button>
          <button onClick={() => setGameMode('quiz')} className="w-full bg-slate-700 hover:bg-green-600 border-2 border-green-500 text-white text-lg md:text-xl font-bold py-5 px-6 rounded-2xl shadow-[0_6px_0_rgba(21,128,61,1)] active:translate-y-2 active:shadow-none transition-all">
            <span className="flex items-center justify-center gap-3">🎯 זיהוי המילה <span className="text-sm font-normal opacity-80">(בחינה אמריקאית)</span></span>
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6 border-b border-slate-600 pb-4">
            <button onClick={() => { setGameMode('menu'); setStatus('playing'); }} className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-600 hover:border-slate-400">
              <ArrowLeft className="w-4 h-4" /> חזור לתפריט
            </button>
            <span className="text-slate-400 text-sm font-medium bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              מילה {currentWordIndex + 1} מתוך {wordList.length}
            </span>
          </div>

          <div className="mb-6 flex flex-wrap justify-center items-center gap-3 bg-slate-700/50 p-4 rounded-xl border border-blue-500/30">
            <span className="text-blue-300 font-bold w-full text-center">✨ רוצים מילים בנושא אחר?</span>
            <input
              type="text"
              placeholder="למשל: חיות, צבעים..."
              value={aiTheme}
              onChange={(e) => setAiTheme(e.target.value)}
              disabled={status === 'error' || isAiLoading}
              className="px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-600 focus:outline-none focus:border-blue-400 text-sm w-48 text-center placeholder-slate-400"
            />
            <button
              onClick={generateNewThemeWords}
              disabled={!aiTheme || isAiLoading}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-bold transition-all disabled:opacity-50 shadow-[0_3px_0_rgba(30,58,138,1)] active:translate-y-1 active:shadow-none min-w-[120px]"
            >
              {isAiLoading && aiTheme ? 'טוען...' : 'צור מילים ✨'}
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-white text-lg mb-2 opacity-80">
              {gameMode === 'quiz' ? 'איזו מילה באנגלית מתאימה לפירוש:' : 'איך כותבים באנגלית את המילה:'}
            </h2>
            <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              {currentWord.heb}
            </div>
          </div>

          {gameMode === 'typing' && (
            <>
              <div className="flex justify-center gap-2 md:gap-4 mb-8 flex-wrap" dir="ltr">
                {Array.from({ length: currentWord.eng.length }).map((_, i) => (
                  <div key={i} className={`w-12 h-16 md:w-14 md:h-18 flex items-center justify-center text-3xl md:text-4xl font-black uppercase rounded-lg shadow-inner transition-all duration-300 ${userInput[i] ? 'bg-blue-600 text-white border-2 border-blue-400' : 'bg-slate-700/50 text-transparent border-b-4 border-slate-500'} ${status === 'success' ? 'bg-green-500 border-green-400' : ''} ${status === 'error' ? 'bg-red-500 border-red-400 animate-pulse' : ''}`}>
                    {userInput[i] || '_'}
                  </div>
                ))}
              </div>
              <div className={`bg-slate-700/40 p-3 md:p-6 rounded-2xl transition-all duration-500 ${status === 'success' ? 'opacity-30 pointer-events-none' : 'opacity-100'}`} dir="ltr">
                {keyboardRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-1 md:gap-2 mb-2">
                    {row.map((letter) => (
                      <button key={letter} onClick={() => handleKeyPress(letter)} disabled={status !== 'playing'} className="w-8 h-11 md:w-11 md:h-14 text-base md:text-xl font-bold rounded-lg bg-slate-600 text-white shadow-[0_4px_0_rgba(71,85,105,1)] active:shadow-none active:translate-y-1 hover:bg-slate-500 transition-all disabled:opacity-50">
                        {letter}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}

          {gameMode === 'scramble' && (
            <div className="mb-8" dir="ltr">
              <div className="flex justify-center gap-2 md:gap-3 mb-6 flex-wrap">
                {scrambleAnswer.map((item, i) => (
                  <div key={i} onClick={() => handleScrambleAnswerClick(item, i)} className={`w-12 h-16 md:w-14 md:h-18 flex items-center justify-center text-3xl md:text-4xl font-black uppercase rounded-lg cursor-pointer transition-all duration-300 ${item ? 'bg-purple-600 text-white border-2 border-purple-400 hover:bg-purple-500' : 'bg-slate-700/50 text-transparent border-b-4 border-slate-500'} ${status === 'success' ? 'bg-green-500 border-green-400 pointer-events-none' : ''} ${status === 'error' ? 'bg-red-500 border-red-400 animate-pulse' : ''}`}>
                    {item ? item.char : '_'}
                  </div>
                ))}
              </div>
              <div className={`flex justify-center flex-wrap gap-2 md:gap-3 p-4 bg-slate-700/40 rounded-2xl transition-all duration-500 ${status === 'success' ? 'opacity-0 pointer-events-none h-0 p-0 overflow-hidden' : 'opacity-100'}`}>
                {scramblePool.map((item, i) => (
                  <button key={item.id} onClick={() => handleScramblePoolClick(item, i)} disabled={status !== 'playing'} className="w-12 h-16 md:w-14 md:h-18 bg-slate-600 hover:bg-slate-500 text-white text-3xl md:text-4xl font-bold rounded-lg shadow-[0_4px_0_rgba(71,85,105,1)] active:translate-y-1 active:shadow-none transition-all disabled:opacity-50">
                    {item.char}
                  </button>
                ))}
                {scramblePool.length === 0 && status === 'playing' && (
                  <div className="text-slate-400 w-full mt-2 text-sm" dir="rtl">לחצו על האותיות למעלה כדי להחזיר אותן</div>
                )}
              </div>
            </div>
          )}

          {gameMode === 'quiz' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" dir="ltr">
              {quizOptions.map((opt, i) => (
                <button key={i} onClick={() => handleQuizClick(opt)} disabled={status !== 'playing'} className={`w-full py-6 text-2xl md:text-3xl font-bold rounded-2xl transition-all border-2 ${status === 'success' && opt.eng === currentWord.eng ? 'bg-green-500 border-green-400 text-white' : ''} ${status === 'error' ? 'opacity-50 border-slate-600 bg-slate-800' : 'bg-slate-700 hover:bg-slate-600 border-slate-500 text-white shadow-[0_4px_0_rgba(71,85,105,1)] active:translate-y-1 active:shadow-none'}`}>
                  {opt.eng}
                </button>
              ))}
            </div>
          )}

          <div className="h-8 mb-4 flex justify-center items-center">
            {message && (
              <div className={`px-6 py-2 rounded-full font-bold text-lg md:text-xl text-white flex items-center gap-2 animate-bounce ${status === 'success' ? 'bg-green-500' : status === 'error' ? 'bg-red-500' : 'bg-purple-500'}`}>
                {status === 'success' ? <Sparkles /> : status === 'error' ? <Rocket /> : <Wand2 />}
                {message}
              </div>
            )}
          </div>

          {status === 'error' && (
            <div className="flex justify-center mt-2 mb-6 w-full">
              <button onClick={restartCurrentWord} className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-bold text-xl md:text-2xl shadow-[0_6px_0_rgba(194,65,12,1)] active:translate-y-2 active:shadow-none transition-all w-full max-w-sm">
                <RotateCcw className="w-6 h-6 md:w-8 md:h-8" />
                לנסות שוב
              </button>
            </div>
          )}

          {status === 'success' && (
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 w-full">
              {!aiSentence ? (
                <button onClick={generateMagicSentence} disabled={isAiLoading} className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 rounded-xl font-bold shadow-[0_4px_0_rgba(147,51,234,1)] active:translate-y-1 active:shadow-none transition-all flex-1 md:flex-none">
                  <Wand2 className="w-5 h-5" />
                  {isAiLoading && !aiTheme ? 'הקסם פועל...' : '✨ משפט קסם ✨'}
                </button>
              ) : (
                <div className="bg-purple-900/60 border-2 border-purple-400 p-4 rounded-xl flex-1 max-w-sm shadow-lg text-center">
                  <p className="text-white text-lg font-bold mb-1" dir="ltr">{aiSentence.eng}</p>
                  <p className="text-purple-200 text-sm">{aiSentence.heb}</p>
                </div>
              )}
              <button onClick={nextWord} className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-xl font-bold shadow-[0_4px_0_rgba(22,163,74,1)] active:translate-y-1 active:shadow-none transition-all flex-1 md:flex-none">
                למילה הבאה
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          )}

          {gameMode === 'typing' && (
            <div className={`flex justify-center gap-4 mt-6 transition-all duration-500 ${status !== 'playing' ? 'opacity-0 pointer-events-none h-0 mt-0 overflow-hidden' : 'opacity-100 h-12'}`}>
              <button onClick={clearInput} disabled={status !== 'playing' || userInput.length === 0} className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white px-6 py-3 rounded-xl font-bold shadow-[0_4px_0_rgba(185,28,28,1)] active:translate-y-1 active:shadow-none transition-all disabled:opacity-50">
                <RotateCcw className="w-5 h-5" /> מחק הכל
              </button>
              <button onClick={handleHint} disabled={status !== 'playing'} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl font-bold shadow-[0_4px_0_rgba(29,78,216,1)] active:translate-y-1 active:shadow-none transition-all disabled:opacity-50">
                <HelpCircle className="w-5 h-5" /> רמז
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center p-4 relative overflow-hidden font-sans" dir="rtl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white animate-pulse" style={{ width: Math.random() * 4 + 1 + 'px', height: Math.random() * 4 + 1 + 'px', top: Math.random() * 100 + '%', left: Math.random() * 100 + '%', animationDuration: Math.random() * 3 + 2 + 's', opacity: Math.random() * 0.7 + 0.3 }} />
        ))}
      </div>

      <div className="absolute top-4 left-4 hidden md:block animate-bounce" style={{ animationDuration: '4s' }}>
        <BabyYodaSVG />
      </div>
      <div className="absolute bottom-10 right-10 opacity-80">
        <LightsaberSVG color="#22c55e" rotation="45" />
      </div>
      <div className="absolute top-20 right-8 opacity-80">
        <LightsaberSVG color="#ef4444" rotation="-45" />
      </div>

      <h1 className="z-10 text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 tracking-wider mt-6 mb-4" style={{ fontFamily: 'Impact, sans-serif' }}>
        🌌 גלקסיית המילים 🌌
      </h1>

      <div className="z-10 w-full max-w-2xl mb-4 overflow-x-auto">
        <div className="flex gap-1.5 pb-2 min-w-max mx-auto justify-center">
          {WEEKS.map((week, i) => (
            <button
              key={i}
              onClick={() => setActiveWeek(i)}
              className={`px-3 py-2 rounded-t-xl font-bold text-sm transition-all border-2 whitespace-nowrap ${activeWeek === i ? 'bg-yellow-400 text-slate-900 border-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.5)]' : 'bg-slate-800 text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white'}`}
            >
              {week.label}
            </button>
          ))}
        </div>
      </div>

      <WeekGame key={activeWeek} words={WEEKS[activeWeek].words} />

      <div className="md:hidden mt-8 animate-bounce" style={{ animationDuration: '3s' }}>
        <BabyYodaSVG />
      </div>
    </div>
  );
}
