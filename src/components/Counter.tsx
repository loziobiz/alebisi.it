// Esempio di componente React
// Puoi importare questo componente nelle tue pagine Astro
// e usarlo con la direttiva client: per l'idratazione

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contatore: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
}

