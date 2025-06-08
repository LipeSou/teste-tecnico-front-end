import { IconPlus } from "@tabler/icons-react";

import { Dialog } from "@/components/common/property-modal";

import { FiltersForm } from "../form-filters";

export function FiltersDialog() {
  return (
    <Dialog
      trigger={
        <button className="sm:w-32 w-full max-w-96 flex items-center gap-2 bg-white rounded-full shadow-md px-4 py-2  border border-gray-200 hover:bg-gray-100 transition font-medium">
          <IconPlus /> Filtros
        </button>
      }
      title="Filtros Avançados"
    >
      <FiltersForm />
    </Dialog>
  );
}
