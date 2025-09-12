import React, { useState, useRef, useEffect } from 'react';

const BOT_NAME = 'GANESHA';
const BOT_AVATAR = '🐘';

const initialMessages = [
  { sender: BOT_NAME, text: 'Namaste! I am GANESHA, your Mahabharata guide. Ask me anything about the epic, its characters, stories, or teachings.' }
];

const exampleQuestions = [
  'Who are the Pandavas?',
  'What is the Bhagavad Gita?',
  'Tell me about Karna.',
  'What happened on Day 13 of the war?',
  'What is the meaning of Dharma?'
];

const GaneshaChatbot: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'You', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { sender: BOT_NAME, text: getBotReply(input) }
      ]);
      setLoading(false);
    }, 1200);
  };

  function getBotReply(question: string): string {
    const q = question.toLowerCase();
    if (q.includes('pandava')) return 'The Pandavas are the five heroic brothers: Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva.';
    if (q.includes('karna')) return 'Karna was the great warrior, son of Kunti and Surya, known for his generosity and loyalty to Duryodhana.';
    if (q.includes('gita')) return 'The Bhagavad Gita is a sacred dialogue between Krishna and Arjuna, teaching the essence of duty and spirituality.';
    if (q.includes('dharma')) return 'Dharma means righteousness, duty, and the moral law that sustains the universe.';
    if (q.includes('day 13')) return 'On Day 13, Abhimanyu was trapped and killed in the Chakravyuha formation, a turning point in the war.';
    if (q.includes('draupadi')) return 'Draupadi was the wife of the Pandavas, known for her strength, devotion, and pivotal role in the epic.';
    if (q.includes('kurukshetra')) return 'Kurukshetra is the battlefield where the great war of the Mahabharata was fought.';
    if (q.includes('bhishma')) return 'Bhishma was the grandsire of the Kuru dynasty, renowned for his vow and valor.';
    if (q.includes('krishna')) return 'Krishna was the divine charioteer, guide, and friend to the Pandavas, and the incarnation of Vishnu.';
    if (q.includes('parva')) return 'The Mahabharata is divided into 18 Parvas (books), each covering different events and teachings.';
    return 'That is a wonderful question! The Mahabharata is vast. Please ask about characters, events, teachings, or anything you wish to know.';
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs w-full flex flex-col items-end">
      {/* Floating Button */}
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg bg-amber-400 hover:bg-amber-500 text-white font-bold text-lg border-2 border-amber-500 mb-2 transition-all duration-200 ${open ? 'ring-4 ring-amber-200' : ''}`}
        style={{ minWidth: 56 }}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close GANESHA Chatbot' : 'Open GANESHA Chatbot'}
      >
        <span className="text-2xl">{BOT_AVATAR}</span>
        <span>{open ? 'Close' : 'Ask GANESHA'}</span>
      </button>
      {/* Chat Window */}
      {open && (
        <div className="bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-50 border-2 border-amber-400 rounded-2xl shadow-2xl p-4 w-full animate-fade-in flex flex-col" style={{ minHeight: 380, maxHeight: 480 }}>
          <div className="flex items-center mb-2">
            <span className="text-3xl mr-2">{BOT_AVATAR}</span>
            <span className="font-bold text-amber-700 text-lg">{BOT_NAME}</span>
          </div>
          <div className="flex-1 h-56 overflow-y-auto bg-white/80 rounded-lg p-2 mb-2 border border-amber-200" style={{ fontFamily: 'serif', fontSize: 15, minHeight: 180 }}>
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender === BOT_NAME ? 'text-amber-800 mb-2 text-left' : 'text-slate-700 mb-2 text-right'}>
                <span className="block font-semibold">{msg.sender}:</span>
                <span>{msg.text}</span>
              </div>
            ))}
            {loading && <div className="text-amber-500 italic">{BOT_NAME} is thinking...</div>}
            <div ref={chatEndRef} />
          </div>
          <div className="flex gap-2 items-center mt-1">
            <input
              className="flex-1 rounded-lg border border-amber-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
              type="text"
              placeholder="Ask about Mahabharata..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
              disabled={loading}
            />
            <button
              className="bg-amber-400 hover:bg-amber-500 text-white font-bold px-4 py-1 rounded-lg shadow"
              onClick={handleSend}
              disabled={loading}
            >
              Send
            </button>
          </div>
          <div className="mt-2 text-xs text-slate-500 text-center">
            Try: <span className="italic">{exampleQuestions[Math.floor(Math.random()*exampleQuestions.length)]}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaneshaChatbot;
