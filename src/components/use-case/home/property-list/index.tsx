import { PropertyCard } from "@/components/common/property-card";
import { useFilters } from "@/store/useFilters";
import { useProperties } from "@/store/useProperties";

export default function PropertyList() {
  const properties = useProperties((s) => s.properties);
  const isLoading = useProperties((s) => s.isLoading);
  const { filters } = useFilters();

  const filteredProperties = properties.filter((p) => {
    // Cidade
    const propertyLabel = `${p.city} - ${p.state}`;
    const matchCity = filters.city ? propertyLabel === filters.city : true;

    // Tipo
    const matchType = filters.type ? p.propertyType === filters.type : true;

    // Faixa de preço
    const matchPrice = filters.priceRange
      ? p.pricePerNight >= filters.priceRange[0] &&
        p.pricePerNight <= filters.priceRange[1]
      : true;

    // Capacidade de hóspedes
    const matchGuests = filters.guests ? p.maxGuests >= filters.guests : true;

    // Quartos
    const matchBedrooms = filters.bedrooms
      ? p.bedrooms >= filters.bedrooms
      : true;

    // Comodidades (amenities: array)
    const matchAmenities = filters.amenities.length
      ? filters.amenities.every((a) => p.amenities?.includes(a))
      : true;

    // Disponibilidade
    const matchAvailable = filters.availableOnly ? p.isAvailable : true;

    return (
      matchCity &&
      matchType &&
      matchPrice &&
      matchGuests &&
      matchBedrooms &&
      matchAmenities &&
      matchAvailable
    );
  });

  const renderPropertiesLoading = () => {
    return (
      <>
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24"
            >
              <div className="h-72 bg-gray-100 animate-pulse rounded-3xl mb-4"></div>
              <div className="h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-100 animate-pulse rounded"></div>
            </div>
          ))
        ) : (
          <p>Nenhum imóvel encontrado.</p>
        )}
      </>
    );
  };
  return (
    <section
      className="m-10 flex flex-wrap -mx-3 mb-20 md:mb-40"
      aria-labelledby="imoveis-encontrados"
    >
      <h2 id="imoveis" className="sr-only">
        Lista de imóveis encontrados
      </h2>
      {filteredProperties.length === 0
        ? renderPropertiesLoading()
        : filteredProperties.map((property) => (
            <div
              key={property.id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24"
            >
              <PropertyCard.Root>
                <PropertyCard.Image
                  src={property.imageUrl}
                  alt={property.title}
                  id={property.id}
                />
                <PropertyCard.Location
                  city={property.city}
                  state={property.state}
                  country={property.country}
                />
                {property.isAvailable && <PropertyCard.Availability />}
              </PropertyCard.Root>
              <PropertyCard.Title title={property.title} id={property.id} />
              <PropertyCard.PriceAndRating
                pricePerNight={property.pricePerNight}
                rating={property.rating}
                numberOfReviews={property.numberOfReviews}
              />
            </div>
          ))}
    </section>
  );
}
