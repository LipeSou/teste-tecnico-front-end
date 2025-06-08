import { useId } from "react";

import { useFilters } from "@/store/useFilters";

const AMENITIES = ["Wi-Fi", "Piscina", "Lareira", "Estacionamento"];

export function FiltersForm() {
  const minPriceId = useId();
  const maxPriceId = useId();
  const guestsId = useId();
  const bedroomsId = useId();

  const { filters, setFilter, reset } = useFilters();

  const minPrice = filters.priceRange ? filters.priceRange[0] : "";
  const maxPrice = filters.priceRange ? filters.priceRange[1] : "";

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Filtros de imóveis"
    >
      {/* Faixa de preço */}
      <div>
        <label htmlFor={minPriceId} className="block text-sm font-medium">
          Preço <span className="text-gray-500">(mín - máx)</span>
        </label>
        <div className="flex gap-2 mt-1">
          <input
            id={minPriceId}
            type="number"
            min={0}
            className="border border-gray-200 p-1 rounded w-1/4"
            placeholder="Mín"
            value={minPrice}
            onChange={(e) => {
              const min = e.target.value ? Number(e.target.value) : null;
              setFilter(
                "priceRange",
                min !== null && maxPrice !== ""
                  ? [min, Number(maxPrice)]
                  : min !== null
                    ? [min, min]
                    : null,
              );
            }}
            aria-label="Preço mínimo"
            inputMode="numeric"
          />
          <span className="self-center"> até </span>
          <input
            id={maxPriceId}
            type="number"
            min={0}
            className="border border-gray-200 p-1 w-1/4"
            placeholder="Máx"
            value={maxPrice}
            onChange={(e) => {
              const max = e.target.value ? Number(e.target.value) : null;
              setFilter(
                "priceRange",
                minPrice !== "" && max !== null
                  ? [Number(minPrice), max]
                  : max !== null
                    ? [max, max]
                    : null,
              );
            }}
            aria-label="Preço máximo"
            inputMode="numeric"
          />
        </div>
      </div>

      {/* Capacidade de hóspedes */}
      <div>
        <label htmlFor={guestsId} className="block text-sm font-medium">
          Capacidade de hóspedes
        </label>
        <input
          id={guestsId}
          type="number"
          min={1}
          className="border border-gray-200 p-1 mt-1"
          placeholder="Ex: 2"
          value={filters.guests ?? ""}
          onChange={(e) =>
            setFilter("guests", e.target.value ? Number(e.target.value) : null)
          }
          aria-label="Capacidade de hóspedes"
          inputMode="numeric"
        />
      </div>

      {/* Quartos */}
      <div>
        <label htmlFor={bedroomsId} className="block text-sm font-medium">
          Quantidade de quartos
        </label>
        <input
          id={bedroomsId}
          type="number"
          min={1}
          className="border border-gray-200 p-1 mt-1"
          placeholder="Ex: 1"
          value={filters.bedrooms ?? ""}
          onChange={(e) =>
            setFilter(
              "bedrooms",
              e.target.value ? Number(e.target.value) : null,
            )
          }
          aria-label="Quantidade de quartos"
          inputMode="numeric"
        />
      </div>

      {/* Comodidades */}
      <div>
        <span className="block text-sm font-medium">Comodidades</span>
        <div className="flex flex-wrap gap-2 mt-1">
          {AMENITIES.map((amenity) => (
            <label
              key={amenity}
              className="flex items-center gap-1 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={() => {
                  const exists = filters.amenities.includes(amenity);
                  setFilter(
                    "amenities",
                    exists
                      ? filters.amenities.filter((a) => a !== amenity)
                      : [...filters.amenities, amenity],
                  );
                }}
                aria-checked={filters.amenities.includes(amenity)}
                aria-label={amenity}
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      {/* Mostrar somente disponíveis */}
      <div>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={filters.availableOnly}
            onChange={(e) => setFilter("availableOnly", e.target.checked)}
            aria-checked={filters.availableOnly}
            aria-label="Mostrar somente disponíveis"
          />
          Mostrar somente disponíveis
        </label>
      </div>

      {/* Resetar filtros */}
      <button
        type="button"
        className="w-full rounded-full bg-gray-200 py-2 font-medium transition hover:bg-gray-300"
        onClick={reset}
      >
        Resetar filtros
      </button>
    </form>
  );
}
