import PropertyCard from "@/components/common/property-card";
import type { Property } from "@/types/properties";

type PropertyListProps = {
  properties: Property[];
};

export default function PropertyList({ properties }: PropertyListProps) {
  console.log("properties", properties);
  return (
    <section
      className="m-10 flex flex-wrap -mx-3 mb-20 md:mb-40"
      aria-labelledby="imoveis-encontrados"
    >
      <h2 id="imoveis" className="sr-only">
        Lista de imóveis encontrados
      </h2>
      {properties?.map((property, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24"
        >
          <PropertyCard property={property} />
        </div>
      ))}
    </section>
  );
}
