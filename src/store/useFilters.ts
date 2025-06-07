import { create } from "zustand";

type Filters = {
  city: string | null;
  type: string | null;
  priceRange: [number, number] | null;
  guests: number | null;
  bedrooms: number | null;
  amenities: string[];
  availableOnly: boolean;
};

type UseFilters = {
  filters: Filters;
  setFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  reset: () => void;
};

export const useFilters = create<UseFilters>((set) => ({
  filters: {
    city: null,
    type: null,
    priceRange: null,
    guests: null,
    bedrooms: null,
    amenities: [],
    availableOnly: false,
  },
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),
  reset: () =>
    set({
      filters: {
        city: null,
        type: null,
        priceRange: null,
        guests: null,
        bedrooms: null,
        amenities: [],
        availableOnly: false,
      },
    }),
}));
