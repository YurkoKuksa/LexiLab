import { useState, useEffect } from 'react';

export function useGoogleSheetWords() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  // Встав свій публічний Sheet ID
  const SHEET_ID = '17BUm13x3abpJRjvjAtN8qwz9uE0k1KMPUZvS0_7yQFQ'; // заміни на свій
  const SHEET_NAME = 'Birds'; // назва листа

  useEffect(() => {
    async function loadWords() {
      try {
        const res = await fetch(
          `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`
        );

        const text = await res.text();

        // Google Sheets повертає JSONP, треба витягти JSON
        const json = JSON.parse(
          text.match(/google\.visualization\.Query\.setResponse\((.*)\);/)[1]
        );

        const rows = json.table.rows.map(row => ({
          word: row.c[1]?.v || '', // другий стовпець
          translation: row.c[3]?.v || '', // четвертий стовпець
        }));

        setWords(rows);
      } catch (error) {
        console.error('Помилка при завантаженні Google Sheet:', error);
      } finally {
        setLoading(false);
      }
    }

    loadWords();
  }, [SHEET_ID, SHEET_NAME]);

  return { words, loading };
}

// import { useState, useEffect } from 'react';

// export function useGoogleSheetWords() {
//   const [words, setWords] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
//   const SHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID;
//   const RANGE = 'Birds!A2:D';

//   useEffect(() => {
//     async function loadWords() {
//       try {
//         if (!API_KEY || !SHEET_ID) {
//           throw new Error('Missing API credentials. Check .env file');
//         }

//         const res = await fetch(
//           `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
//         );

//         const data = await res.json();

//         // Формуємо масив об'єктів
//         const wordsArr = data.values.map(row => ({
//           word: row[1],
//           translation: row[3],
//         }));

//         setWords(wordsArr);
//       } catch (error) {
//         console.error('Google Sheets API error:', error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadWords();
//   }, [API_KEY, SHEET_ID]);

//   return { words, loading };
// }

// import { useState, useEffect } from 'react';

// export function useGoogleSheetWords(sheetId, sheetName) {
//   const [words, setWords] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!sheetId || !sheetName) return;

//     async function loadWords() {
//       try {
//         const res = await fetch(
//           `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`
//         );
//         const text = await res.text();
//         const json = JSON.parse(
//           text.match(/google\.visualization\.Query\.setResponse\((.*)\);/)[1]
//         );

//         const rows = json.table.rows.map(row => ({
//           word: row.c[1]?.v || '',
//           translation: row.c[3]?.v || '',
//         }));

//         setWords(rows);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadWords();
//   }, [sheetId, sheetName]);

//   return { words, loading };
// }
