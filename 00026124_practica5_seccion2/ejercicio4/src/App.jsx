import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { getImageUrl } from './utils.js';

// Componente Avatar
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Componente botón
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>soy un boton y mi cuenta es: {count}</button>;
}

// Componente principal
export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <MyButton count={count} onClick={increment} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        {/* Avatares */}
        <Avatar 
          size={100} 
          person={{
            name: 'Katsuko Saruhashi', 
            imageId: 'Yfe0qp2'
          }} 
          />
        <Avatar 
          size={80} 
          person={{ 
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh' 
          }} 
          />
        <Avatar 
         size={50} 
         person={{ 
            name: 'Lin Lanying', 
            imageId: '1bX5QH6' 
            }} />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
