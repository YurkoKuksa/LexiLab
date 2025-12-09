import { useState, useEffect } from 'react';

export function useGoogleSheetWords(sheetId, sheetName) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sheetId || !sheetName) {
      setError("Sheet ID та Sheet Name обов'язкові");
      setLoading(false);
      return;
    }

    async function loadWords() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const text = await res.text();
        const json = JSON.parse(
          text.match(/google\.visualization\.Query\.setResponse\((.*)\);/)[1]
        );

        const rows = json.table.rows
          .map(row => ({
            word: row.c[1]?.v || '',
            translation: row.c[3]?.v || '',
          }))
          .filter(row => row.word && row.translation); // Фільтруємо порожні рядки

        setWords(rows);
        setError(null);
      } catch (err) {
        console.error('Помилка завантаження Google Sheet:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadWords();
  }, [sheetId, sheetName]);

  return { words, loading, error };
}
