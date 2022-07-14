import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";

import Button from "../../Button";
import Modal from "../Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
  parameters: {
    componentSubtitle: "",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleToggle} label={!open ? "Open" : "Close"} />
      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
};

export const Default2 = Template.bind({});
