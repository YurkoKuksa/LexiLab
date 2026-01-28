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

    const abortController = new AbortController();
    let isSubscribed = true;

    async function loadWords() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`,
          { signal: abortController.signal }
        );

        if (!res.ok) {
          throw new Error(
            `Помилка завантаження: ${res.status} ${res.statusText}`
          );
        }

        const text = await res.text();
        const match = text.match(
          /google\.visualization\.Query\.setResponse\((.*)\);/
        );

        if (!match) {
          throw new Error('Невірний формат відповіді від Google Sheets');
        }

        const json = JSON.parse(match[1]);

        const rows = json.table.rows
          .map(row => {
            const words = row.c
              .slice(1, 11) // B–K
              .map(c => c?.v?.toString().trim())
              .filter(Boolean);

            const translations = row.c
              .slice(11, 21) // L–U
              .map(c => c?.v?.toString().trim())
              .filter(Boolean);

            if (words.length === 0 || translations.length === 0) return null;

            return { words, translations };
          })
          .filter(Boolean);

        if (rows.length === 0) {
          throw new Error('Не знайдено жодного валідного слова');
        }

        if (isSubscribed) {
          setWords(rows);
        }
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error(err);
        if (isSubscribed) {
          setError(err.message);
          setWords([]);
        }
      } finally {
        if (isSubscribed) setLoading(false);
      }
    }

    loadWords();

    return () => {
      isSubscribed = false;
      abortController.abort();
    };
  }, [sheetId, sheetName]);

  return { words, loading, error };
}
