import { useState, useEffect } from 'react';
import { useSyncedStore } from '@syncedstore/react';
import logo from './assets/logos/shuffle.svg';
import styles from './App.module.css';
import Connect from './features/Connect/Connect';
import Keeper from './features/Keeper';
import Member from './features/Member';
import { store } from './services/sync/store';

type ClientType = 'connect' | 'member' | 'keeper';

function App() {
  const [clientType, setClientType] = useState('connect');
  const syncedState = useSyncedStore(store);

  useEffect(() => {
    const persistedValue = localStorage.getItem('layout');
    if (persistedValue) {
      setClientType(persistedValue);
    }
    console.dir(syncedState.testData.message ?? 'test data is empty');
  }, [syncedState]);

  function handleSetClientType(layout: ClientType) {
    localStorage.setItem('layout', layout);
    setClientType(layout);
  }

  function handleTestUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    syncedState.testData.message = e.target.value;
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
        <h2>{syncedState.testData?.message}</h2>
        <label htmlFor="testing">
          <input
            type="text"
            value={syncedState.testData?.message ?? ''}
            onChange={handleTestUpdate}
          />
        </label>
        <hr />
        {clientType === 'connect' && <Connect />}
        {clientType === 'member' && <Member />}{' '}
        {clientType === 'keeper' && <Keeper />}{' '}
      </main>
      <div className="adminControls">
        <button type="button" onClick={() => handleSetClientType('connect')}>
          Connect
        </button>
        <button type="button" onClick={() => handleSetClientType('member')}>
          Member
        </button>
        <button type="button" onClick={() => handleSetClientType('keeper')}>
          Keeper
        </button>
      </div>
    </>
  );
}

export default App;
