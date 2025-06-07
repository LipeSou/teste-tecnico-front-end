"use client";
import { useEffect } from "react";

import PageHead from "@/components/common/PageHead";
import PropertyFilters from "@/components/use-case/home/porperty-filters";
import PropertyList from "@/components/use-case/home/property-list";
import { fetchProperties } from "@/lib/api/properties";
import { useProperties } from "@/store/useProperties";
import type { Property } from "@/types/properties";

export default function Home() {
  const { properties, isLoading, error, setProperties, setLoading, setError } =
    useProperties();

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
      imageUrl: `/images/${imageMap[property.propertyType] || "default.png"}`,
    }));
  };
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchProperties();
        console.log("data", data);
        const propertiesWithImageUrls = transformImageUrls(data);
        setProperties(propertiesWithImageUrls);
        setError(null);
      } catch (err) {
        console.log("err", err);
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
      <div className="pt-36 flex  flex-col">
        <h1 className="font-medium text-4xl text-center">
          Descubra imóveis disponíveis
        </h1>

        <PropertyFilters />
        <PropertyList properties={properties} />
      </div>
    </>
  );
}
