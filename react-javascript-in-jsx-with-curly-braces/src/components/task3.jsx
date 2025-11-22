import { useState } from 'react';

export default function TodoList() {
  const [variant, setVariant] = useState('dark');
  const dark = { backgroundColor: 'black', color: 'pink' };
  const light = { backgroundColor: 'pink', color: 'black' };
  const styles = variant === 'light' ? light : dark;

  return (
    <div>
      <button onClick={() => setVariant(v => (v === 'dark' ? 'light' : 'dark'))}>
        Change Color
      </button>

      <ul style={styles}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}