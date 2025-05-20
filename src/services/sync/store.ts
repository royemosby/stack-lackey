import { getYjsDoc, syncedStore } from '@syncedstore/core';
import { WebrtcProvider } from 'y-webrtc';

const initialState = {
  keeper: {},
  queue: [],
  members: [],
  stage: {},
  ui: {},
  testString: [],
};

export const store = syncedStore(initialState);

const doc = getYjsDoc(store);
export const webrtcProvider = new WebrtcProvider('stackProvider', doc, {
  signaling: ['ws://localhost:4444'],
});

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();
