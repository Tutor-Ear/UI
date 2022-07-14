import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { HStack } from "../../../layouts/Stack";
import Button from "../Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    componentSubtitle: "Clickable area to allow any action to occur",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Default",
};

export const Rounded: ComponentStory<typeof Button> = () => (
  <Button label="Rounded" rounded />
);

Rounded.parameters = {
  docs: {
    storyDescription: "모서리가 둥근 버튼을 만들고 싶을 때 설정해보세요.",
  },
};

export const Variants: ComponentStory<typeof Button> = () => {
  return (
    <HStack>
      <Button variant="slim" label="Slim Button" />
      <Button variant="flat" label="Flat Button" />
      <Button variant="ghost" label="Ghost Button" />
    </HStack>
  );
};

Variants.parameters = {
  docs: {
    storyDescription: "세가지 `variant`타입을 지원합니다.",
  },
};

export const Disabled: ComponentStory<typeof Button> = () => (
  <Button label="Disabled" disabled />
);
