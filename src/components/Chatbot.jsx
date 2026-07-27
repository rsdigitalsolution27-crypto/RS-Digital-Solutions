import { useState, useRef, useEffect } from 'react';
import { chatbot, company } from '../content';

const TYPING_DELAY_MIN = 600;
const TYPING_DELAY_PER_CHAR = 18;
const GREETING_DELAY = 500;

function matchIntent(text) {
  const lower = text.toLowerCase();
  return chatbot.intents.find((intent) =>
    intent.keywords.some((kw) => lower.includes(kw.toLowerCase()))
  );
}

function scrollToContact() {
  const el = document.getElementById('kontakt');
  if (!el) return;
  if (window.lenis) window.lenis.scrollTo(el, { offset: -70 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.lenis) window.lenis.scrollTo(el, { offset: -70 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

function handleFollowUpAction(label) {
  const lower = label.toLowerCase();
  if (lower.includes('termin') || lower.includes('vereinbaren')) {
    window.open(company.calendly, '_blank', 'noopener');
    return true;
  }
  if (lower.includes('kontakt') || lower.includes('formular') || lower.includes('anfrage') || lower.includes('anfragen') || lower.includes('aufnehmen') || lower.includes('projekt starten') || lower.includes('angebot')) {
    scrollToContact();
    return true;
  }
  if (lower.includes('referenz') || lower.includes('beispiel') || lower.includes('leistungen')) {
    window.location.href = '/leistungen';
    return true;
  }
  return false;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && !hasGreeted) {
      setHasGreeted(true);
      chatbot.greeting.forEach((text, i) => {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { role: 'bot', text, isGreeting: true, followUps: i === chatbot.greeting.length - 1 ? chatbot.quickReplies : undefined },
          ]);
        }, GREETING_DELAY * (i + 1));
      });
    }
  }, [open, hasGreeted]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

  const sendMessage = (text) => {
    const cleanText = text.trim();
    if (!cleanText) return;

    setMessages((prev) => [...prev, { role: 'user', text: cleanText }]);
    setInput('');

    const intent = matchIntent(cleanText);
    const reply = intent ? intent.reply : chatbot.fallback;
    const followUps = intent ? intent.followUps : chatbot.fallbackFollowUps;
    const typingDelay = Math.min(TYPING_DELAY_MIN + reply.length * TYPING_DELAY_PER_CHAR, 2500);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text: reply, followUps }]);
    }, typingDelay);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleFollowUp = (label) => {
    const acted = handleFollowUpAction(label);
    if (acted) {
      setMessages((prev) => [
        ...prev,
        { role: 'user', text: label },
        { role: 'bot', text: 'Perfekt — ich leite Sie weiter. Wir sprechen uns gleich!' },
      ]);
      setTimeout(() => setOpen(false), 900);
      return;
    }
    sendMessage(label);
  };

  return (
    <>
      <button
        type="button"
        className={`chatbot-fab${open ? ' chatbot-fab-open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? chatbot.closeAriaLabel : chatbot.triggerAriaLabel}
      >
        <span className="chatbot-fab-icon" aria-hidden="true">
          {open ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </span>
        {!open && <span className="chatbot-fab-badge">{chatbot.badge}</span>}
      </button>

      <div className={`chatbot-panel${open ? ' chatbot-panel-open' : ''}`} role="dialog" aria-label={chatbot.panelTitle}>
        <div className="chatbot-header">
          <div className="chatbot-avatar">{chatbot.avatar}</div>
          <div className="chatbot-header-info">
            <span className="chatbot-title">{chatbot.panelTitle}</span>
            <span className="chatbot-status">
              <span className="chatbot-status-dot" aria-hidden="true"></span>
              {chatbot.status}
            </span>
          </div>
          <button
            type="button"
            className="chatbot-close"
            onClick={() => setOpen(false)}
            aria-label={chatbot.closeAriaLabel}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="chatbot-messages" ref={messagesRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-message chatbot-message-${msg.role}`}>
              <div className="chatbot-bubble">{msg.text}</div>
              {msg.followUps && msg.followUps.length > 0 && (
                <div className="chatbot-follow-ups">
                  {msg.followUps.map((reply, j) => (
                    <button
                      key={j}
                      type="button"
                      className="chatbot-chip"
                      onClick={() => handleFollowUp(reply)}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="chatbot-message chatbot-message-bot">
              <div className="chatbot-bubble chatbot-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        <form className="chatbot-input-row" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder={chatbot.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
          />
          <button
            type="submit"
            className="chatbot-send"
            aria-label={chatbot.sendLabel}
            disabled={!input.trim() || isTyping}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
