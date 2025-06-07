import { LocationFilter } from "../location-filter";

export default function PropertyFilters() {
  return (
    <section aria-labelledby="filtros" className="my-20">
      <h2 id="filtros" className="sr-only">
        Filtros de imóveis
      </h2>
      <div className="flex justify-center">
        <LocationFilter />
      </div>
    </section>
  );
}
