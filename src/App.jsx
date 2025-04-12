import { useState, useEffect } from 'react';
import logo from './assets/logos/shuffle.svg';
import styles from './App.module.css';
import Connect from './features/Connect/Connect';
import Keeper from './features/Keeper';
import Member from './features/Member';

function App() {
  const [clientType, setClientType] = useState('connect');

  useEffect(() => {
    const persistedValue = localStorage.getItem('layout');
    if (persistedValue) {
      setClientType(persistedValue);
    }
  }, []);

  function handleSetClientType(layout) {
    localStorage.setItem('layout', layout);
    setClientType(layout);
  }

  return (
    <>
      <header>
        <div className={styles.title}>
          <img src={logo} alt="logo" />
          <h1>Stack Lackey</h1>
        </div>
      </header>
      <main>
        {clientType === 'connect' && <Connect />}
        {clientType === 'member' && <Member />}{' '}
        {clientType === 'keeper' && <Keeper />}{' '}
      </main>
      <div className="adminControls">
        <button onClick={() => handleSetClientType('connect')}>Connect</button>
        <button onClick={() => handleSetClientType('member')}>Member</button>
        <button onClick={() => handleSetClientType('keeper')}>Keeper</button>
      </div>
    </>
  );
}

export default App;
