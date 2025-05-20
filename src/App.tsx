import { useState, useEffect } from 'react';
import { useSyncedStore } from '@syncedstore/react';
import logo from './assets/logos/shuffle.svg';
import styles from './App.module.css';
import Connect from './features/Connect/Connect';
import Keeper from './features/Keeper';
import Member from './features/Member';
import { store } from './services/sync/store';

function App() {
  const [clientType, setClientType] = useState('connect');
  const syncedState = useSyncedStore(store);

  useEffect(() => {
    const persistedValue = localStorage.getItem('layout');
    if (persistedValue) {
      setClientType(persistedValue);
    }
    console.dir(syncedState.testString);
  }, [syncedState]);

  function handleSetClientType(layout) {
    localStorage.setItem('layout', layout);
    setClientType(layout);
  }

  function handleTestUpdate(e: Event) {
    if (!syncedState.testString[0]) {
      syncedState.testString.push({ message: e.target.value });
    } else {
      syncedState.testString[0].message = e.target.value;
    }
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
        <h2>{syncedState.testString[0]?.message}</h2>
        <label htmlFor="testing">
          <input
            type="text"
            value={syncedState.testString[0]?.message || ''}
            onChange={handleTestUpdate}
          />
        </label>
        <hr />
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
