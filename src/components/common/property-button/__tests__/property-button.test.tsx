import { fireEvent, render, screen } from "@testing-library/react";

import { PropertyButton } from "..";

describe("PropertyButton", () => {
  it("renderiza o texto do botão", () => {
    render(<PropertyButton>Clique Aqui</PropertyButton>);
    expect(
      screen.getByRole("button", { name: /clique aqui/i }),
    ).toBeInTheDocument();
  });

  it("dispara o evento de clique", () => {
    const onClick = jest.fn();
    render(<PropertyButton onClick={onClick}>Clique</PropertyButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
