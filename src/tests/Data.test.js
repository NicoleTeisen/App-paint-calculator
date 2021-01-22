import React from "react";
import { render } from "@testing-library/react";
import Data from "../pages/Data";

describe("Testando o arquivo Data.js", () => {
  it("Testa se a página contém 4 container para incluir dados de 4 paredes diferentes", () => {
    const { getAllByRole } = render(<Data />);

    const headingWall = getAllByRole("heading", { level: 3 });
    expect(headingWall.length).toEqual(4);
    expect(headingWall[0]).toHaveTextContent("Parede 1:");
    expect(headingWall[1]).toHaveTextContent("Parede 2:");
    expect(headingWall[2]).toHaveTextContent("Parede 3:");
    expect(headingWall[3]).toHaveTextContent("Parede 4:");
  });
  it("Testa se a página contém os botões de salvar e editar em cada container de parede", () => {
    const { getAllByRole } = render(<Data />);

    const saveButtons = getAllByRole("button", { name: "SALVAR" });
    expect(saveButtons.length).toEqual(4);

    const editButtons = getAllByRole("button", { name: "EDITAR" });
    expect(editButtons.length).toEqual(4);
  });
  it("Testa se a página contém o botão para calcular a área útil de todas as paredes", () => {
    const { getByRole } = render(<Data />);

    const calculateButton = getByRole("button", { name: "CALCULAR" });
    expect(calculateButton).toBeInTheDocument();
  });
});
