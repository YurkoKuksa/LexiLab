export function normalizeWord(str = '') {
  return (
    str
      .toLowerCase()
      .trim()
      // різні типи апострофів
      .replace(/[’'ʼ`]/g, '')
      // прибрати подвійні пробіли
      .replace(/\s+/g, ' ')
  );
}
