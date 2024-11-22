import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "../Components/LoginForm";

describe("Testing Loginform Component", () => {
  test("Should render LoginForm title", () => {
    render(<LoginForm />);
    const title = screen.getByText("Debe loguearse");
    expect(title).toBeVisible();
  });
  test("Should render first input", () => {
    render(<LoginForm />);
    const email = screen.getByRole("email");
    expect(email).toBeDefined();
  });
  test("Should change second input", () => {
    render(<LoginForm />);
    const pass = screen.getByTestId("password");
    fireEvent.change(pass, { target: { value: "Contraseña123" } });
    expect(pass.value).toBe("Contraseña123");
  });
  test("Should call login button function", () => {
    const handleLogin = vi.fn();
    render(<LoginForm handleLogin={handleLogin} />);
    const btn = screen.getByText("Login");
    fireEvent.click(btn);
    expect(handleLogin).toBeCalledTimes(1);
  });
});
