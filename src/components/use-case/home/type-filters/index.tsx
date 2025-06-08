"use-client";
import {
  IconBeach,
  IconBed,
  IconBuildingSkyscraper,
  IconHome,
  IconHomeEco,
} from "@tabler/icons-react";

import { useFilters } from "@/store/useFilters";

export default function TypeFilters() {
  const { filters, setFilter } = useFilters();

  const types = [
    {
      key: "Apartamento",
      label: "Apartamento",
      icon: <IconBuildingSkyscraper size={28} />,
    },
    {
      key: "Casa",
      label: "Casa de Praia",
      icon: <IconBeach size={28} />,
    },
    { key: "Cabana", label: "Cabana", icon: <IconHome size={28} /> },
    { key: "Flat", label: "Flat", icon: <IconBed size={28} /> },
    { key: "Chalé", label: "Chalé", icon: <IconHomeEco size={28} /> },
  ];

  const handleSelect = (key: string) => {
    if (filters.type === key) {
      setFilter("type", null);
    } else {
      setFilter("type", key);
    }
  };
  return (
    <div className="flex sm:justify-center gap-4 mt-8 overflow-auto pb-2">
      {types.map((type) => (
        <button
          key={type.key}
          type="button"
          aria-pressed={filters.type === type.key}
          onClick={() => handleSelect(type.key)}
          className={`
            flex flex-col items-center justify-center
            px-3 py-2 rounded-2xl transition
            border border-gray-200 bg-white
            shadow-sm
            ${filters.type === type.key ? "border-primary bg-primary/10" : ""}
            hover:border-primary hover:bg-primary/10
            focus-visible:ring-2 focus-visible:ring-primary focus:outline-none
            min-w-[80px]
          `}
        >
          <span
            className={`${filters.type === type.key ? "text-primary" : "text-gray-700"}`}
          >
            {type.icon}
          </span>
          <span className="text-xs mt-1 font-medium">{type.label}</span>
        </button>
      ))}
    </div>
  );
}
