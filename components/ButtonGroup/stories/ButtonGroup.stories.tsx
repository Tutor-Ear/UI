import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconButtonUnstable } from "../..";
import Button from "../../Button";
import ButtonGroup from "../ButtonGroup";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    componentSubtitle: "버튼을 그룹으로 묶어보자",
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button label="Button 1" />
    <Button label="Button 2" />
    <Button label="Button 3" />
  </ButtonGroup>
);

export const Default = Template.bind({});

export const WithIconButton: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup>
    <IconButtonUnstable>
      <p className="w-5 h-5">1</p>
    </IconButtonUnstable>
    <IconButtonUnstable>
      <p className="w-5 h-5">2</p>
    </IconButtonUnstable>
    <IconButtonUnstable>
      <p className="w-5 h-5">3</p>
    </IconButtonUnstable>
  </ButtonGroup>
);

export const WithIconButton2: ComponentStory<typeof ButtonGroup> = () => (
  <ButtonGroup>
    <IconButtonUnstable size="xs">
      <p className="w-5 h-5">1</p>
    </IconButtonUnstable>
    <IconButtonUnstable size="xs">
      <p className="w-5 h-5">2</p>
    </IconButtonUnstable>
    <IconButtonUnstable size="xs">
      <p className="w-5 h-5">3</p>
    </IconButtonUnstable>
  </ButtonGroup>
);
