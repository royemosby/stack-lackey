import { Tabs } from 'radix-ui';

import MemberForm from './MemberForm';
import KeeperForm from './KeeperForm';

export default function Connect() {
  return (
    <Tabs.Root defaultValue="join">
      <Tabs.List aria-label="Join to a Stack">
        <Tabs.Trigger value="join">Join as member</Tabs.Trigger>
        <Tabs.Trigger value="setup">Join as keeper</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="join">
        <MemberForm />
      </Tabs.Content>
      <Tabs.Content value="setup">
        <KeeperForm />
      </Tabs.Content>
    </Tabs.Root>
  );
}
