export interface Keeper {
  id: string;
}
export interface Member {
  id: string;
  displayName: string;
  sessionReconnectPin: string;
  currentlyConnected: boolean;
}

export type ContributeType =
  | 'response'
  | 'clarify'
  | 'direct response'
  | 'point of order';

export interface Stage {
  memberId?: Member['id'];
  contributionType?: string;
  responseToMemberId?: Member['id'];
  isActive: boolean;
  warningMessage?: string;
  timer?: Date;
}
export interface UI {
  isStageActive: boolean;
  errorMessage?: string;
}

// TODO - remove after reaching MVP
export type TestData = Record<string, string>;

export interface SharedState {
  // index signature for compatibility with yjs doc
  [key: string]: any;
  keeper: Keeper;
  members: Member[];
  stage: Stage;
  ui: UI;
  testData: TestData;
  queue: Member[];
}
