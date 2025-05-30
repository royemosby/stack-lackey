import { getYjsDoc, syncedStore } from '@syncedstore/core';
import { WebrtcProvider } from 'y-webrtc';
import type { SharedState, Stage, Keeper, UI } from '../../types/store';

const initialState: SharedState = {
  keeper: {} as Keeper,
  queue: [],
  members: [],
  stage: {} as Stage,
  ui: {} as UI,
  testData: {},
};

export const store = syncedStore<SharedState>(initialState);

const doc = getYjsDoc(store);
export const webrtcProvider = new WebrtcProvider('stackProvider', doc, {
  signaling: ['ws://localhost:4444'],
});

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();
