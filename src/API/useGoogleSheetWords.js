// import { useState, useEffect } from 'react';

// export function useGoogleSheetWords() {
//   const [words, setWords] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Встав свій публічний Sheet ID
//   const SHEET_ID = '1iOxwypQbosb0Jj4l16xrUq84Zg36Lce4XenTrkTPsc0'; // заміни на свій
//   const SHEET_NAME = 'capitals'; // назва листа

//   useEffect(() => {
//     async function loadWords() {
//       try {
//         const res = await fetch(
//           `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`
//         );

//         const text = await res.text();

//         // Google Sheets повертає JSONP, треба витягти JSON
//         const json = JSON.parse(
//           text.match(/google\.visualization\.Query\.setResponse\((.*)\);/)[1]
//         );

//         const rows = json.table.rows.map(row => ({
//           word: row.c[1]?.v || '', // другий стовпець
//           translation: row.c[3]?.v || '', // четвертий стовпець
//         }));

//         setWords(rows);
//       } catch (error) {
//         console.error('Помилка при завантаженні Google Sheet:', error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadWords();
//   }, [SHEET_ID, SHEET_NAME]);

//   return { words, loading };
// }
