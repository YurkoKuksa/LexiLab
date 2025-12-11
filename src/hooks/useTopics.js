// import { useState, useEffect } from 'react';

// export function useTopics() {
//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/data/topics.json') // або публічний Google Sheet JSON
//       .then(res => res.json())
//       .then(data => setTopics(data.topics))
//       .finally(() => setLoading(false));
//   }, []);

//   return { topics, loading };
// }
