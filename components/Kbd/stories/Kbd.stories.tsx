import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Kbd from "../Kbd";

export default {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    componentSubtitle:
      "키보드 단축키를 보여주고자 할 때 사용하는 컴포넌트 입니다.",
  },
} as ComponentMeta<typeof Kbd>;

const Template: ComponentStory<typeof Kbd> = (args) => (
  <Kbd {...args}>{args.label}</Kbd>
);

export const Default = Template.bind({});
Default.args = {
  label: "shift",
};
