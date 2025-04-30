import { getYjsDoc, syncedStore } from '@syncedstore/core';
import { WebrtcProvider } from 'y-webrtc';

export const store = syncedStore({ world: [], moose: {} });

const doc = getYjsDoc(store);
export const webrtcProvider = new WebrtcProvider('synced-world', doc, {
  signaling: ['ws://localhost:4444'],
});

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();
