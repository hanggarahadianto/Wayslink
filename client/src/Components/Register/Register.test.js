import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Register from "./Register";

test("email input should be rendered", () => {
  render(<Register />);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  expect(emailInput).toBeInTheDocument();
});
test("password input should be rendered", () => {
  render(<Register />);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  expect(passwordInput).toBeInTheDocument();
});
test("name input should be rendered", () => {
  render(<Register />);
  const nameInput = screen.getByPlaceholderText(/Name/i);
  expect(nameInput).toBeInTheDocument();
});
test("button input should be rendered", () => {
  render(<Register />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeInTheDocument();
});

test("email input should change", () => {
  render(<Register />);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  const testValue = "test";

  fireEvent.change(emailInput, { target: { value: testValue } });
  expect(emailInput.value).toBe(testValue);
});
test("password input should change", () => {
  render(<Register />);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const testValue = "test";

  fireEvent.change(passwordInput, { target: { value: testValue } });
  expect(passwordInput.value).toBe(testValue);
});
test("name input should change", () => {
  render(<Register />);
  const nameInput = screen.getByPlaceholderText(/Name/i);
  const testValue = "test";

  fireEvent.change(nameInput, { target: { value: testValue } });
  expect(nameInput.value).toBe(testValue);
});

test("button should be disabled", () => {
  render(<Register />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});

// test("button should not be disabled when inputs exist", () => {
//   render(<Register />);

//   const buttonElement = screen.getByRole("button");

//   const emailInput = screen.getAllByPlaceholderText(/Email/i);
//   const passwordInput = screen.getAllByPlaceholderText(/Password/i);
//   const nameInput = screen.getAllByPlaceholderText(/Name/i);

//   const testValue = "test";

//   fireEvent.change(emailInput, { target: { value: testValue } });
//   fireEvent.change(passwordInput, { target: { value: testValue } });
//   fireEvent.change(nameInput, { target: { value: testValue } });

//   expect(buttonElement).not.toBeDisabled();
// });
