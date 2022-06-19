import { beforeEach, describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter", () => {
  let snapshot;

  beforeEach(() => {
    snapshot = render(<Counter title="Testing" />);
  });

  test("should show title all the time", () => {
    // render(<Counter title="Testing" />);
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });

  test("should increase the number", () => {
    const zeroNumber = screen.getByText("0");
    expect(zeroNumber.innerHTML).toEqual("0");

    const addBtn = screen.getByText(/count/i);
    fireEvent.click(addBtn);

    expect(zeroNumber.innerHTML).toEqual("1");
  });
});
