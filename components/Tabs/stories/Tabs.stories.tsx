import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "../Tabs";

export default {
  title: "@headlessui/styled-Tab",
  component: TabGroup,
  parameters: {
    componentSubtitle:
      "탭 구성 요소를 사용하여 보조 탐색 계층을 만들거나 컨테이너 내부의 콘텐츠를 전환합니다.",
  },
} as ComponentMeta<typeof TabGroup>;

const Template: ComponentStory<typeof TabGroup> = () => (
  <TabGroup>
    <TabList>
      <Tab>1</Tab>
      <Tab>2</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>hello 1</TabPanel>
      <TabPanel>hello 2</TabPanel>
    </TabPanels>
  </TabGroup>
);

export const Default = Template.bind({});
