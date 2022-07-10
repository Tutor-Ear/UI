import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "../Input";

const TestForm: React.FC = () => {
  const [password, setPassword] = React.useState("");

  return (
    <Input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      id="password"
      placeholder="Password"
    />
  );
};

test("test handle", () => {
  render(<Input id="password" placeholder="Password" />);

  const password = screen.getByPlaceholderText("Password") as HTMLInputElement;
  fireEvent.change(password, { target: { value: "1234" } });
  console.log("=>", password.value);
});
