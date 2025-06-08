import { FiltersDialog } from "../filters-dialog";
import { LocationFilter } from "../location-filter";
import TypeFilters from "../type-filters";

export default function PropertyFilters() {
  return (
    <section aria-labelledby="filtros" className="md:mt-20 mt-12 mb-3">
      <h2 id="filtros" className="sr-only">
        Filtros de imóveis
      </h2>
      <div className="flex items-center justify-center gap-3 flex-row">
        <LocationFilter />
        <FiltersDialog />
      </div>
      <TypeFilters />
    </section>
  );
}
