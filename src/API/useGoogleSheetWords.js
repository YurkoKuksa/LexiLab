import { useState, useEffect } from 'react';

export function useGoogleSheetWords() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const SHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID;
  const RANGE = 'Birds!A2:D';

  useEffect(() => {
    async function loadWords() {
      try {
        if (!API_KEY || !SHEET_ID) {
          throw new Error('Missing API credentials. Check .env file');
        }

        const res = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );

        const data = await res.json();

        // Формуємо масив об'єктів
        const wordsArr = data.values.map(row => ({
          word: row[1],
          translation: row[3],
        }));

        setWords(wordsArr);
      } catch (error) {
        console.error('Google Sheets API error:', error);
      } finally {
        setLoading(false);
      }
    }

    loadWords();
  }, [API_KEY, SHEET_ID]);

  return { words, loading };
}
