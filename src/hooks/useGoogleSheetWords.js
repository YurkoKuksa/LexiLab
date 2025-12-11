import { useState, useEffect } from 'react';

export function useGoogleSheetWords(sheetId, sheetName, reversed = false) {
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

        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

        const res = await fetch(url, {
          signal: abortController.signal,
        });

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

        if (!json.table || !json.table.rows) {
          throw new Error('Таблиця порожня або має невірний формат');
        }

        const rows = json.table.rows
          .map(row => {
            const wordIndex = reversed ? 3 : 1;
            const translationIndex = reversed ? 1 : 3;

            const word = row.c[wordIndex]?.v?.toString().trim() || '';
            const translation =
              row.c[translationIndex]?.v?.toString().trim() || '';

            return { word, translation };
          })
          .filter(row => row.word && row.translation);

        if (rows.length === 0) {
          throw new Error('Не знайдено жодного валідного слова в таблиці');
        }

        if (isSubscribed) {
          setWords(rows);
          setError(null);
          const direction = reversed ? 'УКР → ENG' : 'ENG → УКР';
          console.log(
            `✅ Завантажено ${rows.length} слів "${sheetName}" (${direction})`
          );
        }
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('🔄 Запит скасовано');
          return;
        }

        console.error('❌ Помилка завантаження Google Sheet:', err);

        if (isSubscribed) {
          setError(err.message);
          setWords([]);
        }
      } finally {
        if (isSubscribed) {
          setLoading(false);
        }
      }
    }

    loadWords();

    return () => {
      isSubscribed = false;
      abortController.abort();
    };
  }, [sheetId, sheetName, reversed]);

  return { words, loading, error };
}
