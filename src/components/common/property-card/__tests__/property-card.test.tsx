import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";

import { PropertyCard } from "..";

jest.mock("next/image", () => {
  const MockImage = (props: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={props.src} alt={props.alt} />
  );
  MockImage.displayName = "MockImage";
  return MockImage;
});
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("PropertyCard", () => {
  it("renderiza título, preço, localização e disponibilidade", () => {
    render(
      <PropertyCard.Root>
        <PropertyCard.Image src="/imagem.jpg" alt="Casa" id="42" />
        <PropertyCard.Location city="Floripa" state="SC" country="Brasil" />
        <PropertyCard.Availability />
        <PropertyCard.Title title="Casa de Praia" id="42" />
        <PropertyCard.PriceAndRating
          pricePerNight={350}
          rating={4.9}
          numberOfReviews={20}
        />
      </PropertyCard.Root>,
    );

    expect(screen.getByText(/Casa de Praia/i)).toBeInTheDocument();
    expect(screen.getByText(/Floripa, SC - Brasil/i)).toBeInTheDocument();
    expect(screen.getByText(/R\$\s*350,00/)).toBeInTheDocument();
    expect(screen.getByText(/Disponível/i)).toBeInTheDocument();
    expect(screen.getByText(/4.9 \(20 avaliações\)/)).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Casa de Praia/i }),
    ).toHaveAttribute("href", "/imoveis/42");
  });
});
