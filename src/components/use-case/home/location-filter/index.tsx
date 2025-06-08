"use client";

import * as Popover from "@radix-ui/react-popover";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

import { useFilters } from "@/store/useFilters";
import { useProperties } from "@/store/useProperties";

function useCityOptions() {
  const properties = useProperties((s) => s.properties);
  return Array.from(
    new Set(properties.map((p) => `${p.city} - ${p.state}`)),
  ).map((label) => ({ label, value: label }));
}

export function LocationFilter() {
  const cityOptions = useCityOptions();
  const { filters, setFilter } = useFilters();
  const selectedCity = filters.city;

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = cityOptions.filter((city) =>
    city.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-96">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button
            type="button"
            className="flex items-center gap-2 bg-white rounded-full shadow-md px-4 py-2 w-full max-w-2xl border border-gray-200"
          >
            <IconSearch />
            <span className="font-medium text-sm md:text-base">
              {selectedCity || "Selecionar cidade"}
            </span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="z-20 mt-2 bg-white rounded-xl shadow-xl p-4 w-72 h-48 overflow-y-auto"
            sideOffset={8}
          >
            <input
              type="text"
              placeholder="Buscar cidade"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full mb-3 px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring"
            />
            <div className="max-h-52 ">
              {filtered.length === 0 && (
                <div className="text-center text-gray-400">
                  Nenhuma cidade encontrada
                </div>
              )}
              {selectedCity && (
                <button
                  type="button"
                  className="mb-3 mr-3 text-sm text-gray-500 hover:text-primary transition float-right"
                  onClick={() => {
                    setFilter("city", null);
                    setSearch("");
                  }}
                >
                  Limpar seleção
                </button>
              )}
              <ul>
                {filtered.map((city) => (
                  <li key={city.value}>
                    <button
                      type="button"
                      className={`block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-600 ${
                        selectedCity === city.value
                          ? "bg-primary text-white font-bold"
                          : ""
                      }`}
                      onClick={() => {
                        setFilter("city", city.value);
                        setOpen(false);
                      }}
                    >
                      {city.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
