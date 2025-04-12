import { Tabs } from 'radix-ui';

import Join from './Join';
import Setup from './Setup';

export default function Connect() {
  // return (
  //   <>
  //     <h2>Connect</h2>
  //     <Join />
  //     <Reconnect />
  //     <Setup />
  //   </>
  // );
  return (
    <Tabs.Root defaultValue="join">
      <Tabs.List aria-label="Join to a Stack">
        <Tabs.Trigger value="join">Join as member</Tabs.Trigger>
        <Tabs.Trigger value="setup">Join as keeper</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="join">
        <Join />
      </Tabs.Content>
      <Tabs.Content value="setup">
        <Setup />
      </Tabs.Content>
    </Tabs.Root>
  );
}
