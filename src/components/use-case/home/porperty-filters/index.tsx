import { LocationFilter } from "../location-filter";
import TypeFilters from "../type-filters";

export default function PropertyFilters() {
  return (
    <section aria-labelledby="filtros" className="mt-20 mb-3">
      <h2 id="filtros" className="sr-only">
        Filtros de imóveis
      </h2>
      <LocationFilter />
      <TypeFilters />
    </section>
  );
}
