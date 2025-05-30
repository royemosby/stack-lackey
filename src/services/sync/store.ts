import { getYjsDoc, syncedStore } from '@syncedstore/core';
import { WebrtcProvider } from 'y-webrtc';
import type { SharedState, Stage, Keeper, UI } from '../../types/store';
import type * as Synced from '@syncedstore/core';

const initialState: SharedState = {
  keeper: {} as Keeper,
  queue: [],
  members: [],
  stage: {} as Stage,
  ui: {} as UI,
  testData: {},
};

export const store = syncedStore<SharedState>(initialState);

const doc: Synced.SyncedDoc = getYjsDoc(store);

export let webrtcProvider: WebrtcProvider | null = null;

let statusCallback: ((connected: boolean) => void) | null = null;

export function setStatusCallback(cb: ((connected: boolean) => void) | null) {
  statusCallback = cb;
}

export const connect = () => {
  if (!webrtcProvider) {
    webrtcProvider = new WebrtcProvider('stackProvider', doc, {
      signaling: ['ws://localhost:4444'],
    });

    // Listen for connection status changes
    webrtcProvider.on('status', (event: { connected: boolean }) => {
      // status is 'connected' or 'disconnected'
      console.log('WebRTC status:', event.connected);
      if (statusCallback) statusCallback(event.connected);
    });
    // Listen for peer changes
    webrtcProvider.on(
      'peers',
      (event: {
        added: string[];
        removed: string[];
        webrtcPeers: string[];
        bcPeers: string[];
      }) => {
        console.log('WebRTC peer events', event);
        // You can update your app state here if needed
      }
    );
  } else {
    webrtcProvider.connect();
  }
};

export const disconnect = () => {
  if (webrtcProvider) {
    webrtcProvider.disconnect();
  }
};
