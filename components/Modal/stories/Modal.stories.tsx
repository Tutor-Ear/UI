import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "../Modal";
import Button from "../../Button";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
  parameters: {
    componentSubtitle:
      "Displays an image that represents a user or organization",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
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
