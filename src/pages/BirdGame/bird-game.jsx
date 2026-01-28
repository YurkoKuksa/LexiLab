// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';

// const GameContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   padding: 20px;
// `;

// const ChatBox = styled.div`
//   width: 100%;
//   max-width: 600px;
//   height: 80vh;
//   background: white;
//   border-radius: 20px;
//   box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
// `;

// const Header = styled.div`
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   color: white;
//   padding: 20px;
//   text-align: center;
//   font-size: 20px;
//   font-weight: bold;
// `;

// const StatsBar = styled.div`
//   background: #f8f9fa;
//   padding: 15px 20px;
//   border-bottom: 2px solid #e9ecef;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   gap: 10px;
// `;

// const Stat = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   font-size: 14px;
//   font-weight: 600;
//   color: #495057;
// `;

// const MessagesContainer = styled.div`
//   flex: 1;
//   overflow-y: auto;
//   padding: 20px;
//   background: #fafafa;
// `;

// const Message = styled.div`
//   margin-bottom: 15px;
//   padding: 12px 16px;
//   border-radius: 12px;
//   max-width: 85%;
//   ${props =>
//     props.sender === 'game'
//       ? `
//     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//     color: white;
//     margin-right: auto;
//   `
//       : `
//     background: white;
//     color: #333;
//     margin-left: auto;
//     border: 2px solid #667eea;
//   `}
//   animation: fadeIn 0.3s ease-in;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(10px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const InputContainer = styled.div`
//   padding: 20px;
//   background: white;
//   border-top: 2px solid #e9ecef;
//   display: flex;
//   gap: 10px;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 12px 16px;
//   border: 2px solid #dee2e6;
//   border-radius: 25px;
//   font-size: 16px;
//   outline: none;

//   &:focus {
//     border-color: #667eea;
//   }
// `;

// const SendButton = styled.button`
//   padding: 12px 24px;
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   color: white;
//   border: none;
//   border-radius: 25px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: transform 0.2s;

//   &:hover {
//     transform: scale(1.05);
//   }

//   &:active {
//     transform: scale(0.95);
//   }
// `;

// const BirdGame = () => {
//   const [gameState, setGameState] = useState('character_selection');
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [player, setPlayer] = useState({
//     bird: '',
//     partner: '',
//     child: '',
//     money: 100,
//     food: 30,
//     energy: 100,
//     day: 0,
//   });
//   const [level, setLevel] = useState(1);
//   const [learnedBirds, setLearnedBirds] = useState(new Set());
//   const [currentJobs, setCurrentJobs] = useState([]);
//   const [eventActive, setEventActive] = useState(null);

//   const messagesEndRef = useRef(null);

//   const characterOptions = [
//     'sparrow',
//     'vulture',
//     'eagle',
//     'heron',
//     'peafowl',
//     'bullfinch',
//     'magpie',
//   ];

//   const level1Birds = ['duck', 'goose', 'turkey', 'parrot', 'chicken'];

//   const allJobs = [
//     { name: 'Поскладати дрова', energy: 15, money: 25 },
//     { name: 'Посидіти з пташеням baby bird', energy: 10, money: 20 },
//     { name: 'Побудувати Nest', energy: 25, money: 40 },
//     { name: 'Зібрати гілочки для гнізда', energy: 12, money: 18 },
//     { name: "Принести черв'ячків для пташенят", energy: 20, money: 30 },
//     { name: 'Полагодити зламане Nest', energy: 18, money: 28 },
//     { name: 'Навчити пташеня літати', energy: 22, money: 35 },
//     { name: 'Захистити гніздо від хижака', energy: 30, money: 50 },
//     { name: 'Знайти безпечне місце для нового гнізда', energy: 16, money: 24 },
//     { name: 'Заспівати пісню для приваблення друзів', energy: 8, money: 15 },
//     { name: 'Очистити гніздо від сміття', energy: 10, money: 16 },
//     { name: 'Принести воду для пташенят', energy: 12, money: 20 },
//     { name: 'Погріти яйця в гнізді', energy: 14, money: 22 },
//     { name: "Зібрати м'яке пір'я для Nest", energy: 11, money: 19 },
//     { name: 'Допомогти пораненому пташкові', energy: 20, money: 32 },
//     { name: 'Відлякати кота від дерева', energy: 25, money: 38 },
//     { name: 'Знайти їжу перед негодою', energy: 18, money: 28 },
//     { name: 'Навести лад у пташиному селищі', energy: 15, money: 25 },
//     { name: 'Перенести гніздо в безпечніше місце', energy: 28, money: 45 },
//     { name: 'Доглянути за новонародженим пташеням', energy: 16, money: 26 },
//     { name: 'Знайти блискучу прикрасу для Nest', energy: 13, money: 21 },
//     {
//       name: 'Допомогти сусідньому птаху з будівництвом',
//       energy: 19,
//       money: 30,
//     },
//     { name: 'Провести нічну варту біля гнізда', energy: 24, money: 36 },
//   ];

//   const randomEvents = [
//     {
//       type: 'positive',
//       name: '🌤 Теплий вітер',
//       effect: () => ({ energy: 15 }),
//       message: 'Теплий вітер відновив вашу енергію! +15 енергії',
//     },
//     {
//       type: 'positive',
//       name: '🎁 Знайдено щедру годівницю',
//       effect: () => ({ money: 30 }),
//       message: 'Ви знайшли щедру годівницю! +30 грошей',
//     },
//     {
//       type: 'positive',
//       name: '☀️ Сонячний день',
//       effect: () => ({ energyBonus: 0.8 }),
//       message: 'Сонячний день! Наступні завдання потребують менше енергії',
//     },
//     {
//       type: 'negative',
//       name: '⚠️ Хижак поблизу',
//       effect: () => ({ energyPenalty: 1.3 }),
//       message: 'Хижак поблизу! Всі дії коштують більше енергії',
//     },
//     {
//       type: 'negative',
//       name: '🌧 Буря',
//       effect: () => ({ energy: -10 }),
//       message: 'Буря! Ви втратили 10 енергії',
//     },
//     {
//       type: 'neutral',
//       name: '🌙 Ніч у лісі',
//       effect: () => ({ energy: 5 }),
//       message: 'Ніч у лісі. Спокійне відновлення: +5 енергії',
//     },
//   ];

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     if (gameState === 'character_selection') {
//       addMessage('game', '🐦 Вітаємо у грі для вивчення англійської лексики!');
//       setTimeout(() => {
//         addMessage(
//           'game',
//           `Оберіть свого персонажа: ${characterOptions.join(', ')}`
//         );
//         addMessage(
//           'game',
//           'Напишіть назву птаха англійською та натисніть Enter'
//         );
//       }, 500);
//     }
//   }, []);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const addMessage = (sender, text) => {
//     setMessages(prev => [
//       ...prev,
//       { sender, text, id: Date.now() + Math.random() },
//     ]);
//   };

//   const generateJobs = birds => {
//     const jobs = [];
//     birds.forEach(bird => {
//       const randomJob = allJobs[Math.floor(Math.random() * allJobs.length)];
//       jobs.push({ bird, ...randomJob });
//     });
//     return jobs;
//   };

//   const triggerRandomEvent = () => {
//     if (Math.random() < 0.3) {
//       const event =
//         randomEvents[Math.floor(Math.random() * randomEvents.length)];
//       addMessage('game', `✨ ${event.message}`);
//       const effects = event.effect();

//       setPlayer(prev => ({
//         ...prev,
//         energy: Math.min(100, Math.max(0, prev.energy + (effects.energy || 0))),
//         money: Math.max(0, prev.money + (effects.money || 0)),
//       }));

//       if (effects.energyBonus || effects.energyPenalty) {
//         setEventActive(effects);
//         setTimeout(() => setEventActive(null), 2);
//       }
//     }
//   };

//   const handleInput = e => {
//     e.preventDefault();
//     const userInput = input.trim().toLowerCase();

//     if (!userInput) return;

//     addMessage('player', input);
//     setInput('');

//     if (gameState === 'character_selection') {
//       if (characterOptions.includes(userInput)) {
//         setPlayer(prev => ({ ...prev, bird: userInput }));
//         setLearnedBirds(prev => new Set([...prev, userInput]));
//         addMessage('game', `Чудовий вибір! Вітаємо, ${userInput}! 🎉`);
//         setTimeout(() => {
//           const availablePartners = characterOptions.filter(
//             b => b !== userInput
//           );
//           addMessage(
//             'game',
//             `Тепер оберіть свого партнера: ${availablePartners.join(', ')}`
//           );
//           setGameState('partner_selection');
//         }, 1000);
//       } else {
//         addMessage('game', '❌ Неправильна назва. Спробуйте ще раз.');
//       }
//     } else if (gameState === 'partner_selection') {
//       const availablePartners = characterOptions.filter(b => b !== player.bird);
//       if (availablePartners.includes(userInput)) {
//         setPlayer(prev => ({ ...prev, partner: userInput }));
//         setLearnedBirds(prev => new Set([...prev, userInput]));
//         addMessage('game', `Прекрасна пара! 💕`);
//         setTimeout(() => {
//           const availableChildren = characterOptions.filter(
//             b => b !== player.bird && b !== userInput
//           );
//           addMessage(
//             'game',
//             `Оберіть пташеня: ${availableChildren.join(', ')}`
//           );
//           setGameState('child_selection');
//         }, 1000);
//       } else {
//         addMessage('game', '❌ Неправильна назва. Спробуйте ще раз.');
//       }
//     } else if (gameState === 'child_selection') {
//       const availableChildren = characterOptions.filter(
//         b => b !== player.bird && b !== player.partner
//       );
//       if (availableChildren.includes(userInput)) {
//         setPlayer(prev => ({ ...prev, child: userInput }));
//         setLearnedBirds(prev => new Set([...prev, userInput]));
//         addMessage('game', `Чудова родина! 👨‍👩‍👧`);
//         setTimeout(() => {
//           startLevel1();
//         }, 1000);
//       } else {
//         addMessage('game', '❌ Неправильна назва. Спробуйте ще раз.');
//       }
//     } else if (gameState === 'playing') {
//       handleGameInput(userInput);
//     }
//   };

//   const startLevel1 = () => {
//     addMessage('game', '=== РІВЕНЬ 1 ===');
//     addMessage(
//       'game',
//       `🌳 Ви живете у лісі на галявині з родиною: ${player.bird}, ${player.partner}, ${player.child}`
//     );
//     addMessage('game', `🏘️ Ваші сусіди: ${level1Birds.join(', ')}`);
//     addMessage(
//       'game',
//       `🎂 У ${player.child} день народження! Треба заробити на торт!`
//     );
//     addMessage(
//       'game',
//       '💼 Кожен сусід пропонує роботу. Напишіть назву птаха, щоб взяти роботу.'
//     );

//     const jobs = generateJobs(level1Birds);
//     setCurrentJobs(jobs);

//     setTimeout(() => {
//       jobs.forEach(job => {
//         addMessage(
//           'game',
//           `🐦 ${job.bird}: "${job.name}" (енергія: ${job.energy}, заробіток: ${job.money} грошей)`
//         );
//       });
//       addMessage(
//         'game',
//         '💡 Напишіть назву птаха англійською, щоб взяти роботу!'
//       );
//     }, 1500);

//     setGameState('playing');
//   };

//   const handleGameInput = userInput => {
//     const job = currentJobs.find(j => j.bird === userInput);

//     if (job) {
//       const energyModifier =
//         eventActive?.energyBonus || eventActive?.energyPenalty || 1;
//       const energyCost = Math.round(job.energy * energyModifier);

//       if (player.energy < energyCost) {
//         addMessage('game', '😰 У вас недостатньо енергії для цієї роботи!');
//         return;
//       }

//       setLearnedBirds(prev => new Set([...prev, userInput]));

//       setPlayer(prev => ({
//         ...prev,
//         energy: prev.energy - energyCost,
//         money: prev.money + job.money,
//         day: prev.day + 1,
//       }));

//       addMessage('game', `✅ Ви виконали роботу для ${job.bird}!`);
//       addMessage('game', `💰 +${job.money} грошей | 🔋 -${energyCost} енергії`);

//       setTimeout(() => {
//         endDay();
//       }, 1000);
//     } else if (userInput.includes(' ')) {
//       const parts = userInput.split(' ');
//       const bird = parts[0];
//       const amount = parseInt(parts[1]);

//       if (level1Birds.includes(bird) && !isNaN(amount)) {
//         const cost = Math.abs(amount) * 3;
//         if (amount > 0) {
//           if (player.money >= cost) {
//             setPlayer(prev => ({
//               ...prev,
//               food: prev.food + amount,
//               money: prev.money - cost,
//             }));
//             setLearnedBirds(prev => new Set([...prev, bird]));
//             addMessage(
//               'game',
//               `🍞 Ви купили ${amount} їжі у ${bird} за ${cost} грошей`
//             );
//           } else {
//             addMessage('game', '❌ Недостатньо грошей!');
//           }
//         } else {
//           setPlayer(prev => ({
//             ...prev,
//             food: prev.food + amount,
//             money: prev.money - cost,
//           }));
//           setLearnedBirds(prev => new Set([...prev, bird]));
//           addMessage(
//             'game',
//             `💵 Ви продали ${Math.abs(amount)} їжі ${bird} за ${cost} грошей`
//           );
//         }
//       } else {
//         addMessage(
//           'game',
//           '❌ Неправильний формат або назва птаха. Спробуйте: "chicken 5"'
//         );
//         setPlayer(prev => ({ ...prev, energy: Math.max(0, prev.energy - 5) }));
//       }
//     } else {
//       addMessage('game', '❌ Неправильна назва птаха. -5 енергії');
//       setPlayer(prev => ({ ...prev, energy: Math.max(0, prev.energy - 5) }));
//     }
//   };

//   const endDay = () => {
//     const foodNeeded = 3;
//     const newFood = player.food - foodNeeded;
//     const newEnergy = Math.min(100, player.energy + 30);

//     if (newFood < 0) {
//       addMessage('game', '💀 Не вистачило їжі! GAME OVER');
//       addMessage('game', `📊 Ви дожили до дня ${player.day}`);
//       addMessage(
//         'game',
//         `📚 Ви вивчили ${learnedBirds.size} англійських слів!`
//       );
//       setGameState('game_over');
//       return;
//     }

//     setPlayer(prev => ({
//       ...prev,
//       food: newFood,
//       energy: newEnergy,
//     }));

//     addMessage(
//       'game',
//       `🌙 День ${player.day} завершено. Їжа: -${foodNeeded}, Енергія: +30`
//     );

//     triggerRandomEvent();

//     const levelBirds = level1Birds;
//     const allBirdsLearned = levelBirds.every(bird => learnedBirds.has(bird));

//     if (allBirdsLearned) {
//       addMessage('game', '🎉 ВІТАЄМО! Ви вивчили всі слова рівня 1!');
//       addMessage('game', '🚀 Наступний рівень у розробці...');
//       setGameState('level_complete');
//     } else {
//       setTimeout(() => {
//         const newJobs = generateJobs(level1Birds);
//         setCurrentJobs(newJobs);
//         newJobs.forEach(job => {
//           addMessage(
//             'game',
//             `🐦 ${job.bird}: "${job.name}" (енергія: ${job.energy}, заробіток: ${job.money} грошей)`
//           );
//         });
//       }, 1500);
//     }
//   };

//   return (
//     <GameContainer>
//       <ChatBox>
//         <Header>🐦 Bird English Game 🐦</Header>

//         {(gameState === 'playing' || gameState === 'level_complete') && (
//           <StatsBar>
//             <Stat>💰 Гроші: {player.money}</Stat>
//             <Stat>🍞 Їжа: {player.food}</Stat>
//             <Stat>🔋 Енергія: {player.energy}</Stat>
//             <Stat>📅 День: {player.day}</Stat>
//             <Stat>📚 Вивчено: {learnedBirds.size}</Stat>
//           </StatsBar>
//         )}

//         <MessagesContainer>
//           {messages.map(msg => (
//             <Message key={msg.id} sender={msg.sender}>
//               {msg.text}
//             </Message>
//           ))}
//           <div ref={messagesEndRef} />
//         </MessagesContainer>

//         {gameState !== 'game_over' && gameState !== 'level_complete' && (
//           <InputContainer>
//             <form
//               onSubmit={handleInput}
//               style={{ display: 'flex', gap: '10px', flex: 1 }}
//             >
//               <Input
//                 type="text"
//                 value={input}
//                 onChange={e => setInput(e.target.value)}
//                 placeholder="Напишіть англійською..."
//                 autoFocus
//               />
//               <SendButton type="submit">Відправити</SendButton>
//             </form>
//           </InputContainer>
//         )}
//       </ChatBox>
//     </GameContainer>
//   );
// };

// export default BirdGame;
