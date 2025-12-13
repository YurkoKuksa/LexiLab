import React, { useState } from 'react';
import { Heart, Mail, Coffee, Star, Send, Copy, Check } from 'lucide-react';

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = email => {
    const hasAt = email.includes('@');
    const hasDot = email.includes('.');
    const dotAfterAt = email.indexOf('.') > email.indexOf('@');

    return hasAt && hasDot && dotAfterAt;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Перевірка email
    if (!email.trim()) {
      setEmailError("Email обов'язковий");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Введіть коректний email (повинен містити @ та крапку)');
      return;
    }

    setEmailError('');
    setLoading(true);

    const FORM_ID = '1FAIpQLSfUTiJqZFvm5i3ecy8n6Yq5jbLuAq_4fSdGlFDKV7kse65dCw';
    const ENTRY_EMAIL = 'entry.1377544754';
    const ENTRY_FEEDBACK = 'entry.1886828072';
    const ENTRY_RATING = 'entry.1575843186';

    const formData = new URLSearchParams();
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_FEEDBACK, feedback);
    formData.append(ENTRY_RATING, rating.toString());

    try {
      await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setFeedback('');
        setEmail('');
      }, 3000);
    } catch (error) {
      console.error('Помилка відправки:', error);
      alert('Щось пішло не так. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Ліва частина - Форма зворотного зв'язку */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl font-bold text-white">
                Оцініть наш сайт
              </h3>
            </div>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">🎉</div>
                <p className="text-lg font-semibold text-green-300">
                  Дякуємо за ваш відгук!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Рейтинг зірками */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Наскільки корисний сайт? *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                        disabled={loading}
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= (hoveredRating || rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-500'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email - ОБОВ'ЯЗКОВЕ */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      placeholder="your@email.com"
                      disabled={loading}
                      className={`w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border ${
                        emailError ? 'border-red-500' : 'border-slate-600'
                      } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                        emailError
                          ? 'focus:ring-red-500'
                          : 'focus:ring-blue-500'
                      } focus:border-transparent disabled:opacity-50`}
                    />
                  </div>
                  {emailError && (
                    <p className="text-red-400 text-xs mt-1">{emailError}</p>
                  )}
                </div>

                {/* Коментар */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ваш відгук
                  </label>
                  <textarea
                    value={feedback}
                    onChange={e => setFeedback(e.target.value)}
                    placeholder="Поділіться враженнями або пропозиціями..."
                    rows="4"
                    disabled={loading}
                    className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={rating === 0 || !email.trim() || loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-3 rounded-lg transition-all shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Відправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Відправити відгук
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Права частина - Донат */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl font-bold text-white">
                Підтримайте проект
              </h3>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Якщо вам подобається наш сайт і він допомагає у вивченні нової
                лексики, ви можете підтримати розвиток проекту донатом ☕
              </p>
              {/* <p className="text-gray-300 leading-relaxed">
                Якщо вам подобається наш сайт і він допомагає у вивченні
                англійської, ви можете підтримати розвиток проекту донатом ☕
              </p> */}

              {/* Картка з реквізитами Monobank */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">
                    💳 RABOBANK
                  </span>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                    EUR
                  </span>
                </div>

                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Номер картки</p>
                    <div className="flex items-center justify-between bg-slate-900/50 rounded px-3 py-2">
                      <code className="text-white font-mono text-sm">
                        NL64 RABO 0190 3194 02
                      </code>
                      <button
                        onClick={() => copyToClipboard('5375414101234567')}
                        className="text-xs text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
                      >
                        {copied ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        {copied ? 'Скопійовано' : 'Копіювати'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Отримувач</p>
                    <p className="text-white font-medium">Iurii Kuksa</p>
                  </div>
                </div>
              </div>

              {/* PayPal */}
              {/* <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">
                    💙 PayPal
                  </span>
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                    USD/EUR
                  </span>
                </div>
                <a
                  href="https://paypal.me/yourpaypal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-100 transition font-medium text-sm"
                >
                  paypal.me/yourpaypal →
                </a>
              </div> */}

              <p className="text-xs text-gray-400 text-center pt-2">
                Кожен внесок допомагає покращувати сайт 💙
              </p>
            </div>
          </div>
        </div>

        {/* Нижня частина футера */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Lexi Yurko. Вивчайте англійську з задоволенням!
            {/* 🚀 */}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Створено з ❤️ для всіх, хто мріє вільно володіти англійською
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
