import {
  IconCircleCheckFilled,
  IconMapPinFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import { notFound } from "next/navigation";

import { PropertyButton } from "@/components/common/property-button";
import { AmenityTag } from "@/components/use-case/imoveis/commodities/amenity-tag";
import { PropertyCarousel } from "@/components/use-case/imoveis/property-carousel.tsx";
import { ReservationModal } from "@/components/use-case/imoveis/reservation-modal";
import type { Property } from "@/types/properties";

type Props = {
  params: Promise<{ id: string }>;
};

// O endpoint original fornece imageUrl do Unsplash, mas o serviço está instável.
// Por isso, utilizei imagens locais mapeando o tipo do imóvel para arquivos estáticos na pasta /images.
const transformImageUrls = (property: Property): Property => {
  const imageMap: Record<string, string> = {
    Apartamento: "apartment.png",
    Casa: "beach-house.png",
    Cabana: "cabin.png",
    Flat: "flat.png",
    Chalé: "chalet.png",
  };

  return {
    ...property,
    imageUrl: `/images/${imageMap[property.propertyType] || "apartment.png"}`,
  };
};

export default async function PropertyDetailsPage({ params }: Props) {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) return notFound();
  // imagens mockadas para fazer um carousel
  const images = [
    property.imageUrl,
    `/images/apartment.png`,
    `/images/beach-house.png`,
    `/images/cabin.png`,
    `/images/chalet.png`,
    `/images/flat.png`,
  ];

  const priceFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  async function getProperty(id: string): Promise<Property | null> {
    const res = await fetch(
      "https://run.mocky.io/v3/1dc4a564-c59c-4e3e-9f26-3d231f1cfea6",
      { cache: "no-store" },
    );
    if (!res.ok) return null;
    const properties: Property[] = await res.json();
    const property = properties.find((p) => p.id === id) ?? null;
    return !!property ? transformImageUrls(property) : null;
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="mb-8 mt-30">
        <div>
          <h1 className="text-2xl font-bold">{property.title}</h1>
          <div className="my-2 bg-zinc-50  w-52  rounded-xl px-2 py-1 flex items-center justify-center gap-2">
            <IconMapPinFilled size={16} />
            <p className="text-xs text-muted-foreground">
              {property.city}, {property.state} - {property.country}
            </p>
          </div>
        </div>
        <div className="relative w-full h-72 mb-4">
          <PropertyCarousel images={images} alt={property.title} />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-medium">
              {priceFormatter.format(property.pricePerNight)}
              <span className="text-base font-normal ml-1">por noite</span>
            </span>
            {property.isAvailable && (
              <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-lg text-xs">
                <IconCircleCheckFilled size={16} /> Disponível
              </span>
            )}
          </div>
          <div>
            <span className="flex items-center gap-1 ">
              <IconStarFilled size={16} className="text-yellow-400" />
              {property.rating} ({property.numberOfReviews} avaliações)
            </span>
          </div>
        </div>
      </section>

      <section className="mb-8 flex justify-between">
        <div>
          <h2 className="font-semibold text-lg mb-2">Descrição</h2>
          <p className="text-muted-foreground">{property.description}</p>
        </div>
        {/* Fazer Reserva */}
        <section
          className="fixed bottom-0 left-0 right-0 
            bg-white  z-50
            px-4 py-4 flex flex-col justify-end items-end
            md:static md:w-auto md:bg-transparent md:border-0 md:p-0 "
        >
          {!property.isAvailable && (
            <span className="w-56 mb-1 text-red-700 text-xs font-medium text-right">
              Indisponível para reserva no momento.
            </span>
          )}
          <ReservationModal
            trigger={
              <PropertyButton
                aria-label="Fazer reserva"
                disabled={!property.isAvailable}
              >
                Fazer Reserva
              </PropertyButton>
            }
            propertyTitle={property.title}
          />
        </section>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold text-lg mb-2">Comodidades</h2>
        <ul className="flex flex-wrap gap-2">
          {property.amenities.map((amenity) => (
            <AmenityTag key={amenity}>{amenity}</AmenityTag>
          ))}
        </ul>
      </section>

      <section className="mb-36">
        <h2 className="font-semibold text-lg mb-2">Detalhes</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <li>
            <strong>Hóspedes:</strong> {property.maxGuests}
          </li>
          <li>
            <strong>Quartos:</strong> {property.bedrooms}
          </li>
          <li>
            <strong>Banheiros:</strong> {property.bathrooms}
          </li>
          <li>
            <strong>Tipo:</strong> {property.propertyType}
          </li>
        </ul>
      </section>
    </main>
  );
}
