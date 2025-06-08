"use client";
import { useEffect } from "react";

import PageHead from "@/components/common/page-head";
import PropertyFilters from "@/components/use-case/home/porperty-filters";
import PropertyList from "@/components/use-case/home/property-list";
import { fetchProperties } from "@/lib/api/properties";
import { useProperties } from "@/store/useProperties";
import type { Property } from "@/types/properties";

export default function Home() {
  const { setProperties, setLoading, setError } = useProperties();

  // O endpoint original fornece imageUrl do Unsplash, mas o serviço está instável.
  // Por isso, utilizei imagens locais mapeando o tipo do imóvel para arquivos estáticos na pasta /images.
  const transformImageUrls = (data: Property[]): Property[] => {
    const imageMap: Record<string, string> = {
      Apartamento: "apartment.png",
      Casa: "beach-house.png",
      Cabana: "cabin.png",
      Flat: "flat.png",
      Chalé: "chalet.png",
    };

    return data.map((property) => ({
      ...property,
      imageUrl: `/images/${imageMap[property.propertyType] || "apartment.png"}`,
    }));
  };
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchProperties();
        const propertiesWithImageUrls = transformImageUrls(data);
        setProperties(propertiesWithImageUrls);
        setError(null);
      } catch (err) {
        setError(`Erro ao carregar dados. ${err}`);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <>
      <PageHead
        title="Encontre o imóvel ideal"
        description="Explore nossa lista de imóveis por temporada com fotos, avaliações e comodidades incríveis."
      />
      <main className="md:pt-36 pt-28 flex flex-col">
        <h1 className="font-medium md:text-4xl text-3xl text-center">
          Descubra imóveis disponíveis
        </h1>

        <PropertyFilters />
        <PropertyList />
      </main>
    </>
  );
}
